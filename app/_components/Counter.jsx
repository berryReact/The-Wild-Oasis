'use client'

import { useState } from "react"

function Counter({data}) {
		const [count , setCount] = useState(0);	
		
	return (
		
		<div>			
			
			<button onClick={() => setCount(c=> c+1)}>Click Me to Add 1</button>			
			<h2>{count}</h2>
						
		</div>
	)
}

export default Counter
