<template>
    <box layout vertical justified class="root" >
        <div class="header" />
        <box layout flex centerJustified >
            <box layout class="content" >
                <box layout vertical flex >
                    <box v-bind:v-style="someStyle"/>
                </box>
                <box class="ad" />
            </box>
        </box>
        <div class="footer" />
      </box>
</template>

<script>

export default {
    name: 'App',
    data() {
        return {
            someStyle: {
                height: "200px",
                backgroundColor: "red"
            } 
        }
    }
}
</script>

<style scoped>
.root {
  width: 100%;
  min-height: 950px;
}

.header, .footer {
  height: 50px;
  background-color: green;
}

.content {
  min-width: 950px;
  background-color: #ccc;
}

.ad {
  width: 200px;
  background-color: yellow;
}
</style>
