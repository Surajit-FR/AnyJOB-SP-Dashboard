import { call, put, takeLatest } from 'redux-saga/effects';
import { setLocation, setLocationError } from '../reducers/LocationSlice';
import { showToast } from '../../utils/Toast';

// Helper function to wrap geolocation in a Promise
const getGeolocation = () => {
    return new Promise<{ latitude: number; longitude: number }>((resolve, reject) => {
        if ('geolocation' in navigator) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const { latitude, longitude } = position.coords;
                    resolve({ latitude, longitude });
                },
                (error) => {
                    reject(new Error('Location permission is required.'));
                }
            );
        } else {
            reject(new Error('Geolocation is not supported by this browser.'));
        }
    });
};

// Saga to request location
export function* fetchLocation() {
    try {
        const { latitude, longitude } = yield call(getGeolocation);
        yield put(setLocation({ latitude, longitude }));
    } catch (error: any) {
        yield put(setLocationError(error.message));
        // showToast({ message: error.message, type: 'error', durationTime: 3500, position: "bottom-center" });
    }
}

// Watcher generator function
export default function* watchLocationRequest() {
    yield takeLatest('location/fetchLocation', fetchLocation);
};