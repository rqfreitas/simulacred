import Titulo from './Titulo'


function Card(props:any) {
  return (
    <div className=' pt-4 pl-5 pb-6 bg-white w-max-[80%] h-min-[500px] rounded-lg shadow-md mb-6'>
      <Titulo name={props.name} />
      {props.children}
    </div>
  )
}

export default Card