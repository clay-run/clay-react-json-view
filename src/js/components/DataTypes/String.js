import React from "react"
import DataTypeLabel from "./DataTypeLabel"
import { toType } from "./../../helpers/util"

//theme
import Theme from "./../../themes/getStyle"

//attribute store for storing collapsed state
import AttributeStore from "./../../stores/ObjectAttributes"

const debug = require('debug')('base:jsonviewer')

const httpPattern = new RegExp('^(https?:\\/\\/)?'+ // protocol
'((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // domain name and extension
'((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
'(\\:\\d+)?'+ // port
'(\\/[-a-z\\d%@_.~+&:]*)*'+ // path
'(\\?[;&a-z\\d%@_.,~+&:=-]*)?'+ // query string
'(\\#[-a-z\\d_]*)?$','i').compile()

export default class extends React.Component {
    constructor(props) {
        super(props)

        this.state.collapsed = AttributeStore.get(
            props.rjvId,
            props.namespace,
            "collapsed",
            true
        )
    }

    state = {
        collapsed: true
    }

    toggleCollapsed = () => {
        this.state.collapsed = !this.state.collapsed
        AttributeStore.set(
            this.props.rjvId,
            this.props.namespace,
            "collapsed",
            this.state.collapsed
        )
        this.setState(this.state)
    }

    render() {


        const type_name = "string"
        const { collapsed } = this.state
        const { props } = this
        const { collapseStringsAfterLength, theme } = props
        let { value } = props
        let collapsible = toType(collapseStringsAfterLength) == "integer"
        let style = { style: { cursor: "default" } }

        if (collapsible && value.length > collapseStringsAfterLength) {
            style.style.cursor = "pointer"
            if (this.state.collapsed) {
                value = (
                    <span>
                        {value.substring(0, collapseStringsAfterLength)}
                        <span {...Theme(theme, "ellipsis")}> ...</span>
                    </span>
                )
            }
        }

        debug(props)
        const isURL = httpPattern.test(value)

        debug('isURL is ', isURL)

        return (
            <div {...Theme(theme, "string")}>
                <DataTypeLabel type_name={type_name} {...props} />
                <span
                    class="string-value"
                    {...style}
                    onClick={this.toggleCollapsed}
                >
                    { isURL ? <a target='_blank' href={value}>"{value}"</a> : `"${value}"` }
                </span>
            </div>
        )
    }
}
