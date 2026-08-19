import React, { useState, useEffect } from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";
import {
  setAudioModeAsync,
  useAudioPlayer,
  useAudioPlayerStatus,
} from "expo-audio";
import Slider from "@react-native-community/slider";
import EntypoCommunityIcons from "@expo/vector-icons/Entypo";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

export default function Player(props) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isSeeking, setIsSeeking] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const player = useAudioPlayer(props.track);
  const playerStatus = useAudioPlayerStatus(player);

  useEffect(() => {
    setAudioModeAsync({
      allowsRecording: false,
      playsInSilentMode: true,
      playThroughEarpiece: false,
      staysActiveInBackground: true,
      interruptionMode: 'duckOthers',
    });

    if (player != null) {
      player.remove();
    }
  }, []);

  useEffect(() => {
    if (player != null) {
      if (player.isLoaded) {
        setIsLoading(false);
      } else {
        console.log(`FATAL PLAYER ERROR`);
      }
    }
  }, [player]);

  useEffect(() => {
    setIsPlaying(player.playing);
  }, [player.playing]);

  const _onPlayPausePressed = () => {
    if (player != null) {
      if (player.playing) {
        player.pause();
      } else {
        player.play();
      }
    }
  };

  const _onSeekSliderValueChange = () => {
    if (player != null && !isSeeking) {
      setIsSeeking(true);

      player.pause();
    }
  };

  const _onSeekSliderSlidingComplete = async (value) => {
    if (player != null) {
      setIsSeeking(false);
      const seekPosition = value * player.duration;

      player.seekTo(seekPosition);
      player.play();
    }
  };

  const _getSeekSliderPosition = () => {
    if (player != null && player.currentTime / player.duration < 1) {
      return player.currentTime / player.duration;
    }

    player.seekTo(0);
    player.play();
    player.pause();

    return 0;
  };

  const _getTimestamp = () => {
    if (
      player != null &&
      player.duration != null &&
      player.currentTime != null
    ) {
      return `${_getMMSSFromSec(player.currentTime)} / ${_getMMSSFromSec(
        player.duration
      )}`;
    }
    return "";
  };

  const _getMMSSFromSec = (millis) => {
    const totalSeconds = millis;
    const seconds = Math.floor(totalSeconds % 60);
    const minutes = Math.floor(totalSeconds / 60);

    const padWithZero = (number) => {
      const string = number.toString();
      if (number < 10) {
        return "0" + string;
      }
      return string;
    };
    return padWithZero(minutes) + ":" + padWithZero(seconds);
  };

  return (
    <>
      <View style={styles.container}>
        <Pressable
          onPress={() => _onPlayPausePressed()}
          style={styles.playButton}
          disabled={isLoading}
        >
          {isPlaying ? (
            <MaterialCommunityIcons name="pause" size={30} color="#666f2d" />
          ) : (
            <EntypoCommunityIcons name="controller-play" size={30} color="#666f2d" />
          )}
        </Pressable>
        <Slider
          thumbTintColor="#666f2d"
          maximumTrackTintColor="#666f2d"
          minimumTrackTintColor="#666f2d"
          minimumValue={0}
          maximumValue={1}
          style={styles.slider}
          value={_getSeekSliderPosition()}
          //onValueChange={() => _onSeekSliderValueChange()}
          onSlidingStart={() => _onSeekSliderValueChange()}
          onSlidingComplete={(value) => _onSeekSliderSlidingComplete(value)}
          disabled={isLoading}
        />
      </View>
      <View style={styles.timestampRow}>
        <Text style={styles.text}>{_getTimestamp()}</Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 0,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingLeft: 8,
    paddingRight: 8,
    height: 35,
  },
  playButton: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingRight: 20,
    zIndex: 5,
  },
  slider: {
    flex: 8,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  timestampRow: {
    flex: 1,
    flexDirection: "row",
    alignSelf: "flex-end",
    paddingRight: 20,
    minHeight: 14,
  },
  text: {
    color: "#666f2d",
    fontSize: 12,
  },
  audioElement: {
    height: 0,
    width: 0,
  },
});
