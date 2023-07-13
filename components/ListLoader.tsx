import Loader from "./Loader"

const ListLoader = () => {
    const styles = {
      borderRadius: '0.475rem',
      color: '#7e8299',
      fontWeight: '500',
      margin: '0',
      width: 'auto',
      padding: '1rem 2rem',
      top: 'calc(50% - 2rem)',
      left: 'calc(50% - 4rem)',
      zIndex:'1'
    }
  
    return <div style={{...styles, position: 'absolute', textAlign: 'center'}}><Loader stroke='rgb(54, 153, 255)' width={80} height={80} /></div>
  }
  
  export {ListLoader}
  