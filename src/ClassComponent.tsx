import React from "react";
import { Button, View, Text, StyleSheet} from "react-native";

type profileProps = {
    name: string;
}

type profileState = {
    age: number;
    dob: string;
}

class profileScreen extends React.Component<profileProps, profileState> {
constructor(props: profileProps){
super(props);
this.state = {age: 10, dob:"7/08/2024"};
this.updateAge = this.updateAge.bind(this);
this.updateDOB = this.updateDOB.bind(this);
}
}

// componentDidMount(): void {
// console.log("Will run when class component is loaded");
// }

// componentWillUnmount(): void {
//     console.log("Will run when class component is unLoaded")
// }

updateAge() {
    this.setState({
        age:15,
    })
}

updateDOB() {
    this.setState({
        dob: "14/08/2024",
    })
}

render(){
    return(
        <View style={{backgroundColor:"white", flex: 1}}>

            <Text style={{flex: 2, backgroundColor: "gray", fontSize: 20}}>{this.state.age}</Text>

            <Text style={{flex: 2, backgroundColor: "pink", fontSize: 20}}>{this.state.dob}</Text>

            <View style={{flex: 3, backgroundColor: "yellow", justifyContent: "center", alignItems: "center"}}>
                <Button title = "Update Age"
            onPress={this.UpdateAge}/>
            </View>

            <View style={{flex: 3, backgroundColor: "blue", justifyContent: "center", alignItems: "center"}}>
                <Button title = "Update DOB" onpress={this.updateDOB}/>
                </View>

        </View>
    )
}

export default ClassComponent;