const useWebkit = ("WebkitAppearance" in document.documentElement.style) && !window.chrome;

let Box = {
    name: 'Box',

    props: {
        flex: [Boolean, String],
        layout: Boolean,
        wrap: Boolean,
        reverse: Boolean,
        horizontal: Boolean,
        vertical: Boolean,
        center: Boolean,
        start: Boolean,
        end: Boolean,
        stretch: Boolean,
        startJustified: Boolean,
        centerJustified: Boolean,
        endJustified: Boolean,
        justified: Boolean,
        aroundJustified: Boolean,
        selfStart: Boolean,
        selfCenter: Boolean,
        selfEnd: Boolean,
        selfStretch: Boolean,
        relative: Boolean,
        fit: Boolean,
        hidden: Boolean,
        vStyle: Object,
    },

    render(h) {
        let props = this;
        let style = props.layout ? { display: useWebkit ? "-webkit-box" : "flex" } : {};
        // flex
        if (typeof(props.flex) === "string" && props.flex !== "") {
            style.flex = style.WebkitBoxFlex = props.flex;
        } else if (props.flex || props.flex === "") {
            style.flex = style.WebkitBoxFlex = 1;
        }
        // flex-wrap
        if (props.wrap) {
            style.flexWrap = style.WebkitFlexWrap = "wrap";
        }
        // flex-direction
        if (props.vertical) {
            style.flexDirection = style.WebkitFlexDirection = props.reverse ? "column-reverse" : "column";
            style.WebkitBoxOrient = "vertical";
        } else {
            style.flexDirection = style.WebkitFlexDirection = props.reverse ? "row-reverse" : "row";
            style.WebkitBoxOrient = "horizontal";
        }
        // align-items
        if (props.center) {
            style.alignItems = style.WebkitBoxAlign = "center";
        } else if (props.start) {
            style.alignItems = "flex-start";
            style.WebkitBoxAlign = "start";
        } else if (props.end) {
            style.alignItems = "flex-end";
            style.WebkitBoxAlign = "end";
        } else if (props.stretch) {
            style.alignItems = style.WebkitBoxAlign = "stretch";
        }
        // justify-content
        if (props.startJustified) {
            style.justifyContent = "flex-start";
            style.WebkitBoxPack = "start";
        } else if (props.centerJustified) {
            style.justifyContent = style.WebkitBoxPack = "center";
        } else if (props.endJustified) {
            style.justifyContent = "flex-end";
            style.WebkitBoxPack = "end";
        } else if (props.justified) {
            style.justifyContent = "space-between";
        } else if (props.aroundJustified) {
            style.justifyContent = "space-around";
        }
        // align-self
        if (props.selfStart) {
            style.alignSelf = style.WebkitAlignSelf = "flex-start";
        } else if (props.selfCenter) {
            style.alignSelf = style.WebkitAlignSelf = "center";
        } else if (props.selfEnd) {
            style.alignSelf = style.WebkitAlignSelf = "flex-end";
        } else if (props.selfStretch) {
            style.alignSelf = style.WebkitAlignSelf = "stretch";
        }
        // other
        if (props.relative) {
            style.position = "relative";
        } else if (props.fit) {
            style.position = "absolute";
            style.top = style.bottom = style.left = style.right = 0;
        }
        if (props.hidden) {
            style.display = "none";
        }

        style = Object.assign(style, props.vStyle);
        return (
            <div style={style} >
                { this.$slots.default }
            </div>
        );
    }
};

Box.install = function(Vue) {
    Vue.component(Box.name, Box);
};

module.exports = Box