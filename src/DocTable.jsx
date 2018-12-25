import React from "react"
import PropTypes from "prop-types"

class DocTable extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const style = {
      container: {
        border: "solid 1px rgba(0, 0, 0, 0.2)",
        boxShadow: "-2px 2px 5px rgba(0, 0, 0, 0.2)",
        display: "inline-block",
        verticalAlign: "top",
        padding: "20px 40px",
        height: this.props.height,
        overflow: "auto",
      },
      header: {
        minWidth: "85px",
        color: this.props.fontColor,
        fontSize: this.props.fontSize,
        fontWeight: "700",
        paddingBottom: "12px",
      },
      cell: {
        minWidth: "75px",
        color: this.props.fontColor,
        fontSize: this.props.fontSize,
        fontWeight: "300",
      }
    }

    let rows = []
    rows.push(
      <tr key="header">
        <td style={style.header}>ID:</td>
        <td style={style.header}>Title:</td>
      </tr>
    )

    for (let area of this.props.paths) {
      rows.push(
        <tr key={area[this.props.idKey]}>
          <td style={style.cell}>{area[this.props.idKey]}</td>
          <td style={style.cell}>{area[this.props.titleKey]}</td>
        </tr>
      )
    }

    return (
      <div style={style.container}>
        <table>
          <tbody>
            {rows}
          </tbody>
        </table>
      </div>
    )
  }
}

DocTable.defaultProps = {
  idKey: "id",
  titleKey: "title",
  fontColor: "#000000",
  fontSize: "0.9rem",
  height: "45%"
}

DocTable.propTypes = {
  paths: PropTypes.arrayOf(PropTypes.object).isRequired,
  idKey: PropTypes.string,
  titleKey: PropTypes.string,
  fontColor: PropTypes.string,
  fontSize: PropTypes.string,
  height: PropTypes.string
}

export default DocTable
