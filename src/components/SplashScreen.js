import React from 'react';
import { ImageBackground, Text, View, Dimensions, ActivityIndicator , StatusBar} from 'react-native';


const SplashScreen = (props) => (
    <View style={styles.SplashView}>
        <ImageBackground style={styles.SplashImage}
            source={require('./../../Assets/Images/splash.png')} >
            <View style={styles.VilaApp} >
                <ActivityIndicator style={{ marginBottom: 50 }} size="small" color="#fff" />
                <Text style={styles.VilaAppText} >
                    Power By VilaApp
                        </Text>
                <Text style={styles.VilaAppNumber} >
                    2  0  1  9
                        </Text>
            </View>
        </ImageBackground>
    </View>
);

export default SplashScreen;

const styles = ({
    SplashView: {
        backgroundColor: '#fff',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomRightRadius: 150,
        height: Dimensions.get('window').height - StatusBar.currentHeight,
        width: Dimensions.get('window').width,
    },
    SplashImage: {
        height:Dimensions.get('window').height - StatusBar.currentHeight,
        width: '100%',
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    VilaApp: {
        alignItems: 'center',
        marginBottom: 20,
        height: 300
    },
    VilaAppText: {
        fontWeight: '900',
        color: '#8F1D40',

    },
    VilaAppNumber: {
        fontWeight: '100',
        color: '#8F1D40'

    }

})
