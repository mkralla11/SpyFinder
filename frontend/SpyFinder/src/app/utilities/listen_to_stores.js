function listenToStores({stores=[], getState=()=>{}}){
  let connectedObj = {
    getInitialState(){
      return getState();
    },
    componentDidMount(){
      stores.forEach((store)=>{
        store.addChangeListener(this._onChange);
      });
    },
    componentWillUnmount(){
      stores.forEach((store)=>{
        store.removeChangeListener(this._onChange);
      });
    },
    _onChange() {
      this.setState(getState());
    }
  };

  return connectedObj;
}

export default listenToStores;