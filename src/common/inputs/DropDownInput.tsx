import { useState } from "react";
import { createUseStyles } from "react-jss";
import { IDropDown } from "../../models/IDropDown";

type DropDownProps = {
  data: IDropDown[];
};

const DropDownInput = ({ data }: DropDownProps) => {
  const classes = useStyles()
  const [open, setOpen] = useState(false);
  const [items] = useState<IDropDown[]>(data);
  const [selectedItem, setSelectedItem] = useState<any>(1);

  
  const toggleDropdown = () => setOpen(!open);
  
  const handleItemClick = (id: number) => {
    selectedItem === id ? setSelectedItem(null) : setSelectedItem(id);
    setOpen(false)
  }
  
  return (
    <div className={classes.dropdown}>
      <div className={classes.dropdownHeader} onClick={toggleDropdown}>
        {!isNaN(selectedItem) ? items?.find(item => item?.id === +selectedItem)?.label : "Select your Item"}
        {/* <i className={`${classes.icon} ${open && classes.openIcon}`}></i> */}
        <img src="./icons/down-arrow-svgrepo-com.svg" width="15" alt="arrow" className={`${classes.icon} ${open && classes.openIcon}`} />
      </div>
      <div className={`${classes.dropdownBody} ${open && classes.openDropdownBody}`}>
        {items.map(item => (
          <div 
            className={`${classes.dropdownItem} ${item.id === +selectedItem && classes.selectedDropItem}`} 
            onClick={() => handleItemClick(item?.id)} 
          >
            {item.label}
            <img src="./icons/tick-svgrepo-com.svg" alt="icons" className={`${classes.dropdownItemDot} ${item.id === +selectedItem && classes.selectedDropdownItemDot}`} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default DropDownInput

const useStyles = createUseStyles({
  root: {
    width: '100%',
    height: '100vh',
  },
  dropdown: {
    width: "30%",
    margin: "100px auto",
    borderRadius: "15px",
    textAlign: 'left'
  },
  dropdownHeader: {
    width: "100%",
    padding: "15px",
    cursor: "pointer",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#fff",
    boxShadow: "0 0px 4px 2px rgb(0 0 0 / 10%)",
    borderRadius: "10px",
    userSelect: "none"
  },
  dropdownBody: {
    padding: "5px 15px",
    borderTtop: "1px solid #E5E8EC",
    display: "none",
    marginTop: "10px",
    maxHeight: "250px",
    width: "100%",
    overflowY: "scroll",
    overflowX: "hidden",
    backgroundColor: "#fff",
    boxShadow: "0 0px 4px 2px rgb(0 0 0 / 10%)",
    borderRadius: "15px",
    userSelect: "none",
  },
  openDropdownBody: {
    display: "flex",
    flexFlow: "column",
    alignItems: "center",
  },
  dropdownItem: {
    padding: "10px",
    width: "98%",
    margin: 0,
    display: "flex",
    flexFlow: "row",
    borderRadius: "10px",
    justifyContent: "space-between",
    alignContent: "center",
    '&:hover': {
      cursor: "pointer",
      backgroundColor: "#f6f6f7",
    }
  },
  selectedDropItem: {
    backgroundColor: "#eef2ff",
    borderRadius: "10px",
  },
  dropdownItemDot: {
    opacity: 0,
    color: "#91A5BE",
    transition: "all .2s ease-in-out",
  },
  selectedDropdownItemDot: {
    opacity: 1,
  },
  icon: {
    fontSize: "13px",
    color: "#91A5BE",
    transform: "rotate(0deg)",
    transition: "all .2s ease-in-out",
  },
  openIcon: {
    transform: "rotate(180deg)",
  },
})