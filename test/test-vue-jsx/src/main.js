import Vue from 'vue'
import Box from 'vue-polymer-layout'
// import Box from '../../../dist/main.js'

new Vue({
    el: '#app',
    render (h) {
        let items = [];
        ["red", "gray", "blue", "red", "gray", "blue", "red", "gray", "blue"].forEach(c=>{
            items.push(<Box flex vStyle={{backgroundColor:c}} />)
        });
        return (
            <Box layout vertical justified vStyle={{width:"100%", minHeight:"950px"}} >
                <div style={{height:"50px", backgroundColor:"green"}} />
                <Box layout flex centerJustified >
                    <Box layout vStyle={{minWidth:"950px", backgroundColor:"#ccc"}} >
                        <Box layout vertical flex >
                            {items}
                        </Box>
                        <Box vStyle={{width:"200px", backgroundColor:"yellow"}} />
                    </Box>
                </Box>
                <div style={{height:"50px", backgroundColor:"green"}} />
            </Box>
        )
  }
})