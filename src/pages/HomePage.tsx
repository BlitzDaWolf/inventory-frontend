import AddButton from "../compoments/AddButton"

const HomePage = () => {
    return (<div>
      <AddButton onClick={() => {alert("Adding")}}/>
    </div>)
}

export default HomePage