import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function FancyCard() {
    return (
        <View>
            <Text style={styles.headingText}>Trending Places</Text>
            <View style={[styles.card, styles.cardElevated]}>
                <Image source={{
                    uri: 'https://images.unsplash.com/photo-1676362538914-2ad56547dae5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyM3x8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=60'
                }} style={styles.cardImage} />
                <View style={styles.cardBody}>
                    <Text style={styles.cardTitle}>Ankunn kaha ho be dikhh na rahe </Text>
                </View>
                <Text style={styles.cardLabel}>Sargun Mehta</Text>
                <Text style={styles.cardDescription}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, voluptatibus, amet qui eius aspernatur </Text>
                <Text style={styles.cardFooter}>12 min away</Text>
                <View style={{flex: 1}}>
                    
                
             </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    headingText: {
        fontSize: 24,
        fontWeight: 'bold',
        paddingHorizontal: 8,

    },
    card: {
        backgroundColor: '#00E',
        width: 350,
        height: 400,
        borderRadius: 6,
        marginVertical: 12,
        marginHorizontal: 16,

    },
    cardElevated: {
        backgroundColor: '#FFFFFF',
        elevation: 19,
        shadowOffset: {
            width: 1,
            height: 1,
        }
    },
    cardImage: {
        height: 280,
        marginBottom: 8,
        borderTopLeftRadius: 6,
        borderTopRightRadius: 6,


    },
    cardBody: {
        flex: 1,
        paddingHorizontal: 12,

    },
    cardTitle: {
        color: '#000000',
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 4,
    },
    cardLabel: {
        color: '#000000',
        fontSize: 18,
        marginBottom: 8






    },
    cardDescription: {
        color: '#120E43',
        fontSize: 14,
        marginBottom: 12,
        flexShrink: 1,
        marginTop: 6,



    },
    cardFooter: {
        color: '#000000',

    },

})