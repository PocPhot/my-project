import { View, Text } from 'react-native'
import React, { useState } from 'react'
import StepIndicator from 'react-native-step-indicator';

import styles from './style'

const labels = ["Xác nhận", "Chuẩn bị", "Giao hàng", "Đã nhận"];
const customStyles = {
    stepIndicatorSize: 25,
    currentStepIndicatorSize: 30,
    separatorStrokeWidth: 2,
    currentStepStrokeWidth: 3,
    stepStrokeCurrentColor: '#fe7013',
    stepStrokeWidth: 3,
    stepStrokeFinishedColor: '#fe7013',
    stepStrokeUnFinishedColor: '#aaaaaa',
    separatorFinishedColor: '#fe7013',
    separatorUnFinishedColor: '#aaaaaa',
    stepIndicatorFinishedColor: '#fe7013',
    stepIndicatorUnFinishedColor: '#ffffff',
    stepIndicatorCurrentColor: '#ffffff',
    stepIndicatorLabelFontSize: 13,
    currentStepIndicatorLabelFontSize: 13,
    stepIndicatorLabelCurrentColor: '#fe7013',
    stepIndicatorLabelFinishedColor: '#ffffff',
    stepIndicatorLabelUnFinishedColor: '#aaaaaa',
    labelColor: '#999999',
    labelSize: 13,
    currentStepLabelColor: '#fe7013'
}

const ProgressBarShip = () => {

    const [step, setStep] = useState(2)

    return (
        <View style={styles.container}>
            <StepIndicator
                customStyles={customStyles}
                currentPosition={step}
                labels={labels}
                stepCount={labels.length}
            />
        </View>
    )
}

export default ProgressBarShip