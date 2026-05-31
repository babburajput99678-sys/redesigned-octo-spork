import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';

export default function App() {
  const [isAdmin, setIsAdmin] = useState(false);
  const [passcode, setPasscode] = useState('');

  const checkAdmin = () => {
    if (passcode === '1234') { // Yahan apna secret passcode rakhein
      setIsAdmin(true);
      Alert.alert("Welcome Owner", "CCTV Mode Activated");
    } else {
      Alert.alert("Access Denied");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>SMM Panel App</Text>
      {!isAdmin ? (
        <View>
          <Text>Login / Sign Up Here</Text>
          <TextInput 
            placeholder="Enter Admin Passcode" 
            secureTextEntry 
            onChangeText={setPasscode}
            style={styles.input}
          />
          <Button title="Login as Owner" onPress={checkAdmin} />
        </View>
      ) : (
        <Text style={styles.adminText}>CCTV CCTV CCTV: User Data Monitoring Active</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
  input: { borderWidth: 1, width: '100%', padding: 10, marginVertical: 10 },
  adminText: { fontSize: 20, color: 'red', fontWeight: 'bold' }
});
              
