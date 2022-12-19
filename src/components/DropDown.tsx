import React, { useEffect, useState } from 'react'
import { createUseStyles } from "react-jss";
import DropDownInput from '../common/inputs/DropDownInput'
import InputWithButton from '../common/inputs/InputWithButton';
import useEnterEvent from '../hooks/useEnterEvent';
import { IDropDown } from '../models/IDropDown';

const DATA: IDropDown[] = [
    {id: 0, label: "Education"},
    {id: 1, label: "Yeeeah, science!"},
    {id: 2, label: "Art"},
    {id: 3, label: "Sport"},
    {id: 4, label: "Games"},
    {id: 5, label: "Health"},
];

const DropDown = () => {
    const classes = useStyles()
    const { showInput } = useEnterEvent()
    const [newItem, setNewItem] = useState<string>("");

    
    const handleNewItem = (e: React.ChangeEvent<HTMLInputElement>) => {
      setNewItem(e.target.value)
    }
  
    const addNewItem = () => {
        if (newItem?.length > 2) {
          const item: IDropDown = {
            id: +DATA[DATA?.length - 1]?.id + 1,
            label: newItem
          }
          DATA.push(item)
          setNewItem("")
        }
    }

  return (
    <div className={classes.root}>
        {!showInput ? <DropDownInput data={DATA} />
        :
        <InputWithButton value={newItem} click={addNewItem} change={handleNewItem} />
        }
    </div>
  )
}

export default DropDown

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
      alignItems: "center"
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