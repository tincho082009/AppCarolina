import React, {useState, useEffect } from 'react';
import {View, Text, Pressable, StyleSheet} from 'react-native';
import { Entypo, MaterialIcons } from '@expo/vector-icons';
import { Video, Audio } from 'expo-av';
import Slider from "@react-native-community/slider";

export default function Player(props){
    const [isPlaying, setIsPlaying] = useState(false);
    const [playbackInstancePosition, setPlaybackInstancePosition] = useState(null);
    const [playbackInstanceDuration, setPlaybackInstanceDuration] = useState(0);
    const [isSeeking, setIsSeeking] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [playbackInstance, setPlaybackInstance] = useState(null);

    useEffect(() => {
      Audio.setAudioModeAsync({
          allowsRecordingIOS: false,
          staysActiveInBackground: false,
          interruptionModeIOS: Audio.INTERRUPTION_MODE_IOS_DO_NOT_MIX,
          playsInSilentModeIOS: true,
          shouldDuckAndroid: true,
          interruptionModeAndroid: Audio.INTERRUPTION_MODE_ANDROID_DO_NOT_MIX,
          playThroughEarpieceAndroid: false
      });
      _loadNewPlaybackInstance()
    }, []) 

    const _loadNewPlaybackInstance = async (playing) => {
      if (playbackInstance != null) {
        await playbackInstance.unloadAsync();
        setPlaybackInstance(null);
      }
  
      const source = props.track;
      const initialStatus = {
        shouldPlay: playing
      };
      
      const {sound, status} = await Audio.Sound.createAsync(
      source,
      initialStatus,
      _onPlaybackStatusUpdate
      );

      setPlaybackInstance(sound)
      _updateScreenForLoading(false);
    }

    const _updateScreenForLoading = (isLoading) => {
      if (isLoading) {
        setIsPlaying(false);
        setIsLoading(true);
        setPlaybackInstanceDuration(null);
        setPlaybackInstancePosition(null);
      } else {
        setIsLoading(false);
      }
    }

    const _onPlaybackStatusUpdate = status => {
      if (status.isLoaded) {
          setPlaybackInstanceDuration(status.durationMillis)
          setPlaybackInstancePosition(status.positionMillis)
          setIsPlaying(status.isPlaying)
      } else {
        if (status.error) {
          console.log(`FATAL PLAYER ERROR: ${status.error}`);
        }
      }
  };

    const _onPlayPausePressed = () => {
      if (playbackInstance != null) {
        if (isPlaying) {
          playbackInstance.pauseAsync();
        } else {
          playbackInstance.playAsync();
        }
      }
    };

    const _onSeekSliderValueChange = value => {
      if (playbackInstance != null && !isSeeking) {
          setIsSeeking(true)
          playbackInstance.pauseAsync();
        }
    };

    const _onSeekSliderSlidingComplete = async value => {
      if (playbackInstance != null) {
        setIsSeeking(false);
        const seekPosition = value * playbackInstanceDuration;
        playbackInstance.playFromPositionAsync(seekPosition);
      }
    }

    const _getSeekSliderPosition = () => {
      if (
          playbackInstance != null &&
          playbackInstancePosition != null &&
          playbackInstanceDuration != null
        ) {
          return (
              playbackInstancePosition /
            playbackInstanceDuration
          );
        }
        return 0;
    }

    const _getTimestamp = () => {
        if (
          playbackInstance != null &&
          playbackInstancePosition != null &&
          playbackInstanceDuration != null
        ) {
          return `${_getMMSSFromMillis(
            playbackInstancePosition
          )} / ${_getMMSSFromMillis(playbackInstanceDuration)}`;
        }
        return "";
    }

    const _getMMSSFromMillis = (millis) => {
      const totalSeconds = millis / 1000;
      const seconds = Math.floor(totalSeconds % 60);
      const minutes = Math.floor(totalSeconds / 60);

      const padWithZero = number => {
          const string = number.toString();
          if (number < 10) {
          return "0" + string;
          }
          return string;
      };
      return padWithZero(minutes) + ":" + padWithZero(seconds);
    }


    return (
      <>
      <View style={styles.container}>
          <Video 
            resizeMode={Video.RESIZE_MODE_CONTAIN}           
            onPlaybackStatusUpdate={() => _onPlaybackStatusUpdate()}
            style={styles.audioElement} 
            useNativeControls={false}
          />
          <Pressable onPress={() => _onPlayPausePressed()} style={styles.playButton}  disabled={isLoading}>
              {isPlaying
              ? <MaterialIcons name="pause" size={30} color="#666f2d" />
              : <Entypo name="controller-play" size={30} color="#666f2d" />
              }
          </Pressable>
          <Slider
            thumbTintColor="#666f2d"
            maximumTrackTintColor="#666f2d"
            minimumTrackTintColor="#666f2d"
            style={styles.slider}
              value={_getSeekSliderPosition()}
              onValueChange={() => _onSeekSliderValueChange()}
              onSlidingComplete={(value) => _onSeekSliderSlidingComplete(value)}
              disabled={isLoading}
          />        
      </View>
      <View style={styles.timestampRow}>
          <Text
          style={styles.text}
          >
          {_getTimestamp()}
          </Text>
      </View>
      </>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 0,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingLeft: 8,
      paddingRight: 8,
      height: 35
    },
    playButton: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      paddingRight: 20,
      zIndex: 5
    },
    slider: {
      flex: 8,
      flexDirection: 'row',
      justifyContent: 'flex-start',
      alignItems: 'center'
    },
    timestampRow: {
        flex: 1,
        flexDirection: "row",
        alignSelf: "flex-end",
        paddingRight: 20,
        minHeight: 14
      },
      text: {
        color: "#666f2d",
        fontSize: 12
      },
    audioElement: {
        height: 0,
        width: 0,
    }
});