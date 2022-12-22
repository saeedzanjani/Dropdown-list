import React from 'react'
import { createUseStyles } from 'react-jss'

type InputWithButtonProps = {
  value: string,
  change: React.ChangeEventHandler<HTMLInputElement>,
  click: React.MouseEventHandler<HTMLButtonElement>,
};

const InputWithButton = ({ value, change, click }: InputWithButtonProps) => {
  const classes = useStyles()

  return (
    <div className={classes.newItem_wrapper}>
      <input type="text" value={value} onChange={change} className={classes.inputItem} placeholder="New dropdown item" />
      <button type="button" className={classes.addBtn} onClick={click}>Add</button>  
    </div>
  )
}

export default InputWithButton

const useStyles = createUseStyles({
  root: {
    width: '100%',
    maxHeight: '100vh',
  },
  newItem_wrapper: {
    width: "30%",
    margin: "100px auto",
    height: "50px",
    display: "flex",
    flexFlow: "row",
    alignItems: "center",
    '@media (max-width: 700px)': {
      width: "70%",
    }
  },
  inputItem: {
    width: "80%",
    height: "100%",
    border: "1px solid #ccc",
    boxSizing: 'border-box',
    padding: "15px",
    fontSize: "16px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: "10px",
    borderTopRightRadius: "0",
    borderBottomRightRadius: "0",
    borderRight: "none"
  },
  addBtn: {
      width: "20%",
      height: "100%",
      fontSize: "16px",
      fontWeight: "600",
      borderTopRightRadius: "10px",
      borderBottomRightRadius: "10px",
      border: "1px solid #ccc",
      cursor: "pointer"
  }
})