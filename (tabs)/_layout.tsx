import { Tabs } from "expo-router";

export default function TabLayout() {
  return (
    <Tabs 
      screenOptions={{
        headerShown: false,
        headerStyle: {
          backgroundColor: "#a280ff"
        },
        headerTintColor: "#fff",
        headerTitleStyle:{
          fontWeight: "bold"
        }
      }}>

        <Tabs.Screen
          name="index"
          options={{
            title: "Home"
          }}
        />

        <Tabs.Screen
          name="perfil"
          options={{
            title: "Perfil"
          }}
        />

        <Tabs.Screen
          name="historico"
          options={{
            title: "Histórico"
          }}
        />

    </Tabs>
  );
}