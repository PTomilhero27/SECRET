import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Home() {
    return (
        <SafeAreaView style={styles.container}>
                <View style={styles.textContainer}>
                    <Text style={[styles.texts]}>THE</Text>
                    <Text style={[styles.texts, styles.h2]}>MIND</Text>
                </View>

                <TouchableOpacity style={styles.button}>
                    <Text style={styles.textButton}>
                        Entrar
                    </Text>
                </TouchableOpacity>
                <StatusBar style="auto" />

        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
        alignItems: 'center',
    },
    button: {
        width: 150,
        height: 50,
        marginBottom: 20,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
    },
    textButton: {
        fontSize: 25,
        fontWeight: '500',
        textTransform: 'uppercase'
    },
    textContainer: {
        flex: 1,
        marginTop: 100,
        alignItems: 'center',
        marginLeft: 20
    },

    texts: {
        color: '#fff',
        fontSize: 55,
        fontWeight: '100',
        letterSpacing: 15,
    },
    h2: {
        fontWeight: '600'
    }
});
