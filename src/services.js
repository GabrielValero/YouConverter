import TrackPlayer, { 
	Event, 
	State, 
	AppKilledPlaybackBehavior,
	Capability,
	RepeatMode, } from 'react-native-track-player';
	
	export const DefaultRepeatMode = RepeatMode.Queue;

	  
let wasPausedByDuck = false;

export async function PlaybackService() {
	TrackPlayer.addEventListener(Event.RemotePause, () => {
		console.log('Event.RemotePause');
		TrackPlayer.pause();
	});

	TrackPlayer.addEventListener(Event.RemotePlay, () => {
		console.log('Event.RemotePlay');
		TrackPlayer.play();
	});

	TrackPlayer.addEventListener(Event.RemoteNext, () => {
		console.log('Event.RemoteNext');
		TrackPlayer.skipToNext();
	});

	TrackPlayer.addEventListener(Event.RemotePrevious, () => {
		console.log('Event.RemotePrevious');
		TrackPlayer.skipToPrevious();
	});

	// TrackPlayer.addEventListener(Event.RemoteJumpForward, async (event) => {
	// 	console.log('Event.RemoteJumpForward', event);
	// 	const position = (await TrackPlayer.getPosition()) + event.interval;
	// 	TrackPlayer.seekTo(position);
	// });

	// TrackPlayer.addEventListener(Event.RemoteJumpBackward, async (event) => {
	// 	console.log('Event.RemoteJumpBackward', event);
	// 	const position = (await TrackPlayer.getPosition()) - event.interval;
	// 	TrackPlayer.seekTo(position);
	// });

	TrackPlayer.addEventListener(Event.RemoteSeek, (event) => {
		console.log('Event.RemoteSeek', event);
		TrackPlayer.seekTo(event.position);
	});

	TrackPlayer.addEventListener(
		Event.RemoteDuck,
		async ({ permanent, paused }) => {
		console.log('Event.RemoteDuck');
		if (permanent) {
			TrackPlayer.pause();
			return;
		}
		if (paused) {
			const playerState = await TrackPlayer.getState();
			wasPausedByDuck = playerState !== State.Paused;
			TrackPlayer.pause();
		} else {
			if (wasPausedByDuck) {
			TrackPlayer.play();
			wasPausedByDuck = false;
			}
		}
		}
	);

	TrackPlayer.addEventListener(Event.PlaybackQueueEnded, (event) => {
		console.log('Event.PlaybackQueueEnded', event);
	});

	TrackPlayer.addEventListener(Event.PlaybackActiveTrackChanged, (event) => {
		console.log('Event.PlaybackTrackChanged', event);
	});

	TrackPlayer.addEventListener(Event.PlaybackProgressUpdated, (event) => {
		console.log('Event.PlaybackProgressUpdated', event);
	});
}

const tpInit = async (options) => {
	const setup = async () => {
	  try {
		await TrackPlayer.setupPlayer(options);
	  } catch (error) {
		return (error & { code}).code;
	  }
	};
	while ((await setup()) === 'android_cannot_setup_player_in_background') {
	  // A timeout will mostly only execute when the app is in the foreground,
	  // and even if we were in the background still, it will reject the promise
	  // and we'll try again:
	  await new Promise((resolve) => setTimeout(resolve, 1));
	}
  };

export async function setupPlayer() { // inicializa el track player

	await tpInit({
		autoHandleInterruptions: true,
	  });

	let isSetup = false;
	await TrackPlayer.updateOptions({
		android: {
			appKilledPlaybackBehavior: AppKilledPlaybackBehavior.ContinuePlayback
		},
		capabilities: [
			Capability.Play,
			Capability.Pause,
			Capability.SkipToNext,
			Capability.SkipToPrevious,
			Capability.Stop,
			Capability.SeekTo,
		],
		compactCapabilities: [
			Capability.Play,
			Capability.Pause,
			Capability.SkipToNext,
		],
		progressUpdateEventInterval: 2,
	})
	await TrackPlayer.setRepeatMode(DefaultRepeatMode);
	return true
}