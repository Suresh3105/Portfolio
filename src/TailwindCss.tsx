import "./index.css"
const Summa=()=>{
    return(
        <div>
             <h1 className='text-5xl bg-red-700 w-auto'>Width auto</h1>
    <h1 className="text-3xl bg-green-600 w-1/2">width 1/2</h1>
     <h1 className="text-3xl bg-green-600 w-[200px]">width 200px</h1>
     <h1 className="text-3xl bg-green-600 w-[50%]">width 50%</h1>
      <h1 className="text-3xl bg-green-600 w-xs">width xs</h1>
       <h1 className="text-3xl bg-green-600 w-sm">width sm</h1>
        <h1 className="text-3xl bg-green-600 w-lg">width lg</h1>
        <br />
         <h1 className="text-3xl bg-green-600 h-lh">height lh</h1>
          <br />
         <h1 className="text-3xl bg-green-600 h-1/2">height 3/4</h1>
          <br />
         <h1 className="text-3xl bg-green-600 h-20 w-xs">height 20</h1>
        </div>
    )
}
export default Summa();