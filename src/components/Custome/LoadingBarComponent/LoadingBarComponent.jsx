import LoadingBar from 'react-top-loading-bar';

const LoadingBarComponent = ({progress,setProgress}) => {
    return (
        <LoadingBar
        color='#f11946'
        height={3}
        waitingTime={1500}
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />
    );
};

export default LoadingBarComponent;