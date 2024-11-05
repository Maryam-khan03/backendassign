const express=require('express')
const app=express();
app.use(express.json())
let book=[
    {id:"123",title:"beauty and the beast",year:1780,author:"jebj"},

]
app.post("/add",(req,res)=>
    { 
      const data=req.body
      book.push(data)
       res.json({ array:book })
   })
   app.get("/read",(req,res)=>
    {  
        res.json({ array: book })
    
    })
    app.put("/update/:id",(req,res)=>
        { 
           
         const book1=req.params.id;
          const data=book.find(books=>
           {
            return   books.id==book1;
       
           });
          res.json({array:data});
          
       })
       app.delete("/delete/:id",(req,res)=>
        { 
        const bookid=req.params.id;
        const index=book.find(books=>
            books.id=bookid
        );
        if(index!==-1){
            const deletebook=book.splice(index,1);
            res.json(deletebook[0])
        }
        
     
       })