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
            <svg {...getIconStyle(style)}
            viewBox="0 0 15 14"
            width="15" 
            height="14"
            >
            <g id="Canvas" transform="translate(-41436 -10525)">
            <g id="np_one-click_1180536_000000" opacity="0.5">
            <g id="Group">
            <g id="Vector">
            <use xlinkHref="#path0_fill" transform="translate(41440.5 10529.3)"/>
            </g>
            <g id="Vector">
            <use xlinkHref="#path1_fill" transform="translate(41436 10525)"/>
            </g>
            </g>
            </g>
            </g>
            <defs>
            <path id="path0_fill" fill-rule="evenodd" d="M 0.448663 0.0203425L 9.33435 4.07092C 9.61947 4.25699 9.57308 4.58103 9.27869 4.6823L 5.64135 5.569L 4.60107 9.45382C 4.52005 9.74242 4.12978 9.78421 4.00671 9.50129L 0.0305488 0.449552C -0.0931472 0.188161 0.181457 -0.0776538 0.44802 0.021083L 0.448663 0.0203425ZM 0.948387 0.957678L 4.2233 8.41268L 5.07991 5.21273C 5.11825 5.08108 5.17206 5.02096 5.31183 4.98298L 8.22179 4.2735L 0.948387 0.957678Z"/>
            <path id="path1_fill" fill-rule="evenodd" d="M 5.27005 -3.31285e-08C 8.17685 -3.31285e-08 10.5339 2.40685 10.5339 5.36961L 10.5333 5.36961C 10.5352 5.45694 10.503 5.54112 10.443 5.60314C 10.3836 5.66517 10.302 5.70061 10.2166 5.70061C 10.1319 5.70061 10.0503 5.66517 9.99089 5.60314C 9.93089 5.54112 9.89874 5.45694 9.89997 5.36961C 9.89997 2.75763 7.83549 0.648092 5.26943 0.648092C 2.70336 0.648092 0.632705 2.75812 0.632705 5.36961C 0.632705 7.97461 2.70272 10.0848 5.26943 10.0848L 5.27004 10.0848C 5.35478 10.0829 5.43704 10.1164 5.49826 10.1772C 5.55887 10.2386 5.59351 10.3215 5.59351 10.4088C 5.59351 10.4962 5.55887 10.5797 5.49826 10.6405C 5.43703 10.7013 5.35477 10.7348 5.27004 10.7329C 2.36325 10.7329 -8.34948e-09 8.32718 -8.34948e-09 5.36961C -8.34948e-09 2.40637 2.36325 3.21173e-06 5.27004 3.21173e-06L 5.27005 -3.31285e-08Z"/>
            </defs>
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