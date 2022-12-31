import { View, Image, Dimensions } from 'react-native'
import React, { useState, useEffect } from 'react'
import Carousel, { Pagination } from 'react-native-snap-carousel'
import { useDispatch, useSelector } from 'react-redux'

import styles from './style'
import { fetchSlider } from '../../store/slices/slider'

const windowWidth = Dimensions.get('window').width - 10; // Get width of the device

const BoxSlider = () => {

    const dispatch = useDispatch()
    const listSlider = useSelector(state => state.Slider.listSlider) // Get list Slider from state into Slider reducer

    // Render box slider only one. 
    useEffect(() => {
        dispatch(fetchSlider())
    }, [])

    // create useState to switch item in box slider
    const [activeItem, setActiveItem] = useState(0)
    const entire = listSlider ? listSlider.length : 0

    // Render list image in boxSlider
    const renderSlider = ({ item }) => {
        return (
            <View style={styles.boxImage}>
                <Image source={{ uri: item.image }} style={styles.image} />
            </View>
        )
    }

    return (
        <View style={styles.container}>

            <Carousel // Use Carousel Components to create box slider on top of the Home Screen
                firstItem={activeItem}
                sliderWidth={windowWidth}
                itemWidth={windowWidth}
                data={listSlider}
                renderItem={renderSlider}
                onSnapToItem={(item) => setActiveItem(item)}
                autoplay={true}
            />

            <View style={styles.dotPagination} >
                <Pagination // custom poit active in Carousel
                    dotsLength={entire}
                    dotStyle={styles.dotStyle}
                    activeDotIndex={activeItem}
                    inactiveDotOpacity={0.4}
                    inactiveDotScale={0.6}
                />
            </View>


        </View>

    )
}

export default BoxSlider