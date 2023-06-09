import 
const App = () => {
  const getData = async () => {
    await axiosPostRequest({ title: "hello", desc: "greeting", id: 101 })
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <View>
      <Text>App data</Text>
    </View>
  );
};
export default App;
