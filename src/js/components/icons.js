import React from "react";

const DEFAULT_WIDTH = 24;
const DEFAULT_HEIGHT = 24;
const DEFAULT_COLOR = "#000000";

export class CircleMinus extends React.Component {
    render() {
        const {props} = this;
        const {style, ...rest} = props;

        return (
            <span {...rest}>
            <svg {...getIconStyle(style)}
            viewBox="0 0 24 24"
            fill="currentColor"
            preserveAspectRatio="xMidYMid meet"
            >
                <path d="M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M7,13H17V11H7" />
            </svg>
            </span>
        );
    }
}

export class JsonExtractor extends React.Component {
    render() {
        const { props } = this
        const { style, ...rest } = props
        
        return (
            <span {...rest}>
            <svg {...getIconStyle(style)} width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="14" height="14" fill="rgb(109,109,109)" fill-opacity="0"/>
            <rect width="5.58787" height="5.58787" fill="rgb(109,109,109)" fill-opacity="0" transform="translate(8.40521 0.00683594)"/>
            <rect width="5.58787" height="5.58787" fill="rgb(109,109,109)" fill-opacity="0" transform="translate(8.40521 0.00683594)"/>
            <path d="M13.3879 0.00683594H9.01038C8.67612 0.00683594 8.40521 0.277746 8.40521 0.612039C8.40521 0.946302 8.67612 1.21721 9.01038 1.21721H12.7827V4.98953C12.7827 5.32379 13.0536 5.5947 13.3879 5.5947C13.7221 5.5947 13.9931 5.32379 13.9931 4.98953V0.612039C13.9931 0.277746 13.7222 0.00683594 13.3879 0.00683594Z" fill="rgb(109,109,109)"/>
            <rect width="9.84441" height="9.84437" fill="rgb(109,109,109)" fill-opacity="0" transform="translate(4.14868 0.00683594)"/>
            <rect width="9.84441" height="9.84437" fill="rgb(109,109,109)" fill-opacity="0" transform="translate(4.14868 0.00683594)"/>
            <path d="M13.8158 0.184168C13.5794 -0.0522747 13.1964 -0.0522747 12.96 0.184168L4.32601 8.81816C4.08957 9.05438 4.08957 9.43766 4.32601 9.67389C4.44403 9.79209 4.59896 9.85121 4.75389 9.85121C4.9086 9.85121 5.06354 9.79209 5.18177 9.67389L13.8158 1.0399C14.0522 0.803673 14.0522 0.420391 13.8158 0.184168Z" fill="rgb(109,109,109)"/>
            <rect width="14" height="14" fill="rgb(109,109,109)" fill-opacity="0"/>
            <rect width="14" height="14" fill="rgb(109,109,109)" fill-opacity="0"/>
            <path d="M13.3948 7.84324C13.0606 7.84324 12.7896 8.11415 12.7896 8.44841V12.7896H1.21038V1.21038H5.55159C5.88585 1.21038 6.15676 0.939466 6.15676 0.605203C6.15676 0.270941 5.88585 0 5.55159 0H0.605204C0.27091 0 0 0.27091 0 0.605203V13.3948C0 13.7291 0.27091 14 0.605204 14H13.3948C13.7293 14 14 13.7291 14 13.3948V8.44841C14 8.11415 13.7291 7.84324 13.3948 7.84324Z" fill="rgb(109,109,109)"/>
            </svg>
            </span>
        )
    }
}

export class CirclePlus extends React.Component {
    render() {
        const {props} = this;
        const {style, ...rest} = props;

        return (
            <span {...rest}>
            <svg {...getIconStyle(style)}
            viewBox="0 0 24 24"
            fill="currentColor"
            preserveAspectRatio="xMidYMid meet"
            >
                <path d="M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M13,7H11V11H7V13H11V17H13V13H17V11H13V7Z" />
            </svg>
            </span>
        );
    }
}

export class SquareMinus extends React.Component {
    render() {
        const {props} = this;
        const {style, ...rest} = props;
        const svgStyle = getIconStyle(style).style;

        return (
            <span {...rest}>
            <svg fill={svgStyle.color}
            width={svgStyle.height} height={svgStyle.width}
            style={svgStyle}
            viewBox="0 0 1792 1792">
            <path d="M1344 800v64q0 14-9 23t-23 9h-832q-14 0-23-9t-9-23v-64q0-14 9-23t23-9h832q14 0 23 9t9 23zm128 448v-832q0-66-47-113t-113-47h-832q-66 0-113 47t-47 113v832q0 66 47 113t113 47h832q66 0 113-47t47-113zm128-832v832q0 119-84.5 203.5t-203.5 84.5h-832q-119 0-203.5-84.5t-84.5-203.5v-832q0-119 84.5-203.5t203.5-84.5h832q119 0 203.5 84.5t84.5 203.5z"/>
            </svg>
            </span>
        );
    }
}

export class SquarePlus extends React.Component {
    render() {
        const {props} = this;
        const {style, ...rest} = props;
        const svgStyle = getIconStyle(style).style;

        return (
            <span {...rest}>
            <svg fill={svgStyle.color}
            width={svgStyle.height} height={svgStyle.width}
            style={svgStyle}
            viewBox="0 0 1792 1792">
            <path d="M1344 800v64q0 14-9 23t-23 9h-352v352q0 14-9 23t-23 9h-64q-14 0-23-9t-9-23v-352h-352q-14 0-23-9t-9-23v-64q0-14 9-23t23-9h352v-352q0-14 9-23t23-9h64q14 0 23 9t9 23v352h352q14 0 23 9t9 23zm128 448v-832q0-66-47-113t-113-47h-832q-66 0-113 47t-47 113v832q0 66 47 113t113 47h832q66 0 113-47t47-113zm128-832v832q0 119-84.5 203.5t-203.5 84.5h-832q-119 0-203.5-84.5t-84.5-203.5v-832q0-119 84.5-203.5t203.5-84.5h832q119 0 203.5 84.5t84.5 203.5z"/>
            </svg>
            </span>
        );
    }
}

export class ArrowRight extends React.Component {
    render() {
        const {props} = this;
        const {style, ...rest} = props;

        return (
            <span {...rest}>
            <svg
            style={{...getIconStyle(style).style, paddingLeft: '2px', verticalAlign: 'top'}}
            viewBox="0 0 15 15"
            fill="currentColor"
            >
                <path d="M0 14l6-6-6-6z"></path>
            </svg>
            </span>
        );
    }
}

export class ArrowDown extends React.Component {
    render() {
        const {props} = this;
        const {style, ...rest} = props;

        return (
            <span {...rest}>
            <svg
            style={{...getIconStyle(style).style, paddingLeft: '2px', verticalAlign: 'top'}}
            viewBox="0 0 15 15"
            fill="currentColor"
            >
                <path d="M0 5l6 6 6-6z"></path>
            </svg>
            </span>
        );
    }
}

export class Clippy extends React.Component {
    render() {
        const {props} = this;
        const {style, ...rest} = props;

        return (
            <span {...rest}>
            <svg {...getIconStyle(style)}
            viewBox="0 0 40 40"
            fill="currentColor"
            preserveAspectRatio="xMidYMid meet"
            >
            <g>
                <path d="m30 35h-25v-22.5h25v7.5h2.5v-12.5c0-1.4-1.1-2.5-2.5-2.5h-7.5c0-2.8-2.2-5-5-5s-5 2.2-5 5h-7.5c-1.4 0-2.5 1.1-2.5 2.5v27.5c0 1.4 1.1 2.5 2.5 2.5h25c1.4 0 2.5-1.1 2.5-2.5v-5h-2.5v5z m-20-27.5h2.5s2.5-1.1 2.5-2.5 1.1-2.5 2.5-2.5 2.5 1.1 2.5 2.5 1.3 2.5 2.5 2.5h2.5s2.5 1.1 2.5 2.5h-20c0-1.5 1.1-2.5 2.5-2.5z m-2.5 20h5v-2.5h-5v2.5z m17.5-5v-5l-10 7.5 10 7.5v-5h12.5v-5h-12.5z m-17.5 10h7.5v-2.5h-7.5v2.5z m12.5-17.5h-12.5v2.5h12.5v-2.5z m-7.5 5h-5v2.5h5v-2.5z" />
            </g>
            </svg>
            </span>
        );
    }
}

export class RemoveCircle extends React.Component {
    render() {
        const {props} = this;
        const {style, ...rest} = props;

        return (
            <span {...rest}>
            <svg {...getIconStyle(style)}
            viewBox="0 0 40 40"
            fill="currentColor"
            preserveAspectRatio="xMidYMid meet"
            >
            <g>
                <path d="m28.6 25q0-0.5-0.4-1l-4-4 4-4q0.4-0.5 0.4-1 0-0.6-0.4-1.1l-2-2q-0.4-0.4-1-0.4-0.6 0-1 0.4l-4.1 4.1-4-4.1q-0.4-0.4-1-0.4-0.6 0-1 0.4l-2 2q-0.5 0.5-0.5 1.1 0 0.5 0.5 1l4 4-4 4q-0.5 0.5-0.5 1 0 0.7 0.5 1.1l2 2q0.4 0.4 1 0.4 0.6 0 1-0.4l4-4.1 4.1 4.1q0.4 0.4 1 0.4 0.6 0 1-0.4l2-2q0.4-0.4 0.4-1z m8.7-5q0 4.7-2.3 8.6t-6.3 6.2-8.6 2.3-8.6-2.3-6.2-6.2-2.3-8.6 2.3-8.6 6.2-6.2 8.6-2.3 8.6 2.3 6.3 6.2 2.3 8.6z" />
            </g>
            </svg>
            </span>
        );
    }
}

export class AddCircle extends React.Component {
    render() {
        const {props} = this;
        const {style, ...rest} = props;

        return (
            <span {...rest}>
            <svg {...getIconStyle(style)}
            viewBox="0 0 40 40"
            fill="currentColor"
            preserveAspectRatio="xMidYMid meet"
            >
            <g>
                <path d="m30.1 21.4v-2.8q0-0.6-0.4-1t-1-0.5h-5.7v-5.7q0-0.6-0.4-1t-1-0.4h-2.9q-0.6 0-1 0.4t-0.4 1v5.7h-5.7q-0.6 0-1 0.5t-0.5 1v2.8q0 0.6 0.5 1t1 0.5h5.7v5.7q0 0.5 0.4 1t1 0.4h2.9q0.6 0 1-0.4t0.4-1v-5.7h5.7q0.6 0 1-0.5t0.4-1z m7.2-1.4q0 4.7-2.3 8.6t-6.3 6.2-8.6 2.3-8.6-2.3-6.2-6.2-2.3-8.6 2.3-8.6 6.2-6.2 8.6-2.3 8.6 2.3 6.3 6.2 2.3 8.6z" />
            </g>
            </svg>
            </span>
        );
    }
}

export class Add extends React.Component {
    render() {
        const {props} = this;
        const {style, ...rest} = props;

        return (
            <span {...rest}>
            <svg {...getIconStyle(style)}
            viewBox="0 0 40 40"
            fill="currentColor"
            preserveAspectRatio="xMidYMid meet"
            >
            <g>
                <path d="m31.6 21.6h-10v10h-3.2v-10h-10v-3.2h10v-10h3.2v10h10v3.2z" />
            </g>
            </svg>
            </span>
        );
    }
}

export class Edit extends React.Component {
    render() {
        const {props} = this;
        const {style, ...rest} = props;

        return (
            <span {...rest}>
            <svg {...getIconStyle(style)}
            viewBox="0 0 40 40"
            fill="currentColor"
            preserveAspectRatio="xMidYMid meet"
            >
            <g>
                <path d="m19.8 26.4l2.6-2.6-3.4-3.4-2.6 2.6v1.3h2.2v2.1h1.2z m9.8-16q-0.3-0.4-0.7 0l-7.8 7.8q-0.4 0.4 0 0.7t0.7 0l7.8-7.8q0.4-0.4 0-0.7z m1.8 13.2v4.3q0 2.6-1.9 4.5t-4.5 1.9h-18.6q-2.6 0-4.5-1.9t-1.9-4.5v-18.6q0-2.7 1.9-4.6t4.5-1.8h18.6q1.4 0 2.6 0.5 0.3 0.2 0.4 0.5 0.1 0.4-0.2 0.7l-1.1 1.1q-0.3 0.3-0.7 0.1-0.5-0.1-1-0.1h-18.6q-1.4 0-2.5 1.1t-1 2.5v18.6q0 1.4 1 2.5t2.5 1h18.6q1.5 0 2.5-1t1.1-2.5v-2.9q0-0.2 0.2-0.4l1.4-1.5q0.3-0.3 0.8-0.1t0.4 0.6z m-2.1-16.5l6.4 6.5-15 15h-6.4v-6.5z m9.9 3l-2.1 2-6.4-6.4 2.1-2q0.6-0.7 1.5-0.7t1.5 0.7l3.4 3.4q0.6 0.6 0.6 1.5t-0.6 1.5z" />
            </g>
            </svg>
            </span>
        );
    }
}

export class CheckCircle extends React.Component {
    render() {
        const {props} = this;
        const {style, ...rest} = props;

        return (
            <span {...rest}>
            <svg {...getIconStyle(style)}
            viewBox="0 0 40 40"
            fill="currentColor"
            preserveAspectRatio="xMidYMid meet"
            >
            <g>
                <path d="m31.7 16.4q0-0.6-0.4-1l-2.1-2.1q-0.4-0.4-1-0.4t-1 0.4l-9.1 9.1-5-5q-0.5-0.4-1-0.4t-1 0.4l-2.1 2q-0.4 0.4-0.4 1 0 0.6 0.4 1l8.1 8.1q0.4 0.4 1 0.4 0.6 0 1-0.4l12.2-12.1q0.4-0.4 0.4-1z m5.6 3.6q0 4.7-2.3 8.6t-6.3 6.2-8.6 2.3-8.6-2.3-6.2-6.2-2.3-8.6 2.3-8.6 6.2-6.2 8.6-2.3 8.6 2.3 6.3 6.2 2.3 8.6z" />
            </g>
            </svg>
            </span>
        );
    }
}


function getIconStyle(style) {
    if (!style) {
        style = {};
    }
    return {style:{
        verticalAlign: "middle",
        ...style,
        color: style.color ? style.color : DEFAULT_COLOR,
        height: "1em",
        width: "1em"
    }}
}