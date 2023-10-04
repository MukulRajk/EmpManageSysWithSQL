const express=require('express');
const bodyParser=require('body-parser'); 
const cors=require('cors');
const mysql=require('mysql2');


const app=express();
const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(cors());

const db=mysql.createConnection({

host: 'localhost',
user:'root',
password:'rootroot',
database : 'employee_db'

});

db.connect((err) =>{
if(err) {
  
  console.error('Error connecting to MySql : ',err);
throw err;

}

  console.log('Connected to MySql');

});


const Employee={

    tableName :'employees',
    create :(employee,callback ) =>{

    db.query('insert into employees set ?',employee,callback);

    },


    readAll : (callback) => {

        db.query('select * from employees',callback);

    },

    readOne: (id, callback) => {
        db.query('SELECT * FROM employees WHERE id = ?', id, callback);
      },

      update :(id,employee,callback) => {
     db.query('update employees set ? where id =?',[employee,id],callback);

      },

      delete :(id, callback) =>{
db.query('delete from employees where id = ?',id,callback);

      }

};


//api endpoints
app.post('/api/employees',(req,res)  =>{
 const employee=req.body;
Employee.create(employee,(err,result ) =>{

    if(err) {
      console.error('Error creating employee:', err);
      res.status(500).json({ message: 'Internal Server Error' });
      return;
    }
    res.json({ message : 'Employee Created',id : result.insertId });


});

});




app.get('/api/employees',(req,res) =>{

    Employee.readAll((err,results ) =>{
        if (err) {
          console.error('Error reading employees:', err);
          res.status(500).json({ message: 'Internal Server Error' });
          return;
        }
        res.json(results);

    });
}
);


app.get('/api/employees/:id', (req,res) => {
 const id= req.params.id;
 Employee.readOne(id,(err,result) =>{

    if( err ) {
      console.error('Error reading employee:', err);
      res.status(500).json({ message: 'Internal Server Error' });
      return;
    }

if(result.length ===0){
    res.status(404).json({ message : 'Employee Not found'});
}
  else {
    res.json(result[0]);
  }

});
});


app.put('/api/employees/:id', (req, res) => {
    const id = req.params.id;
    const updatedEmployee = req.body;
    Employee.update(id, updatedEmployee, (err, result) => {
      if (err) {
        console.error('Error updating employee:', err);
        res.status(500).json({ message: 'Internal Server Error' });
        return;
      }
    
    

      if (result.affectedRows === 0) {
       res.status(404).json({ message: 'Employee not found' });
     } else {
        res.json({ message: 'Employee updated' });
      }
    });
  });
 

app.delete('/api/employees/:id', (req, res) => {
    const id = req.params.id;
    Employee.delete(id, (err, result) => {
      if (err) {
        console.error('Error deleting employee:', err);
        res.status(500).json({ message: 'Internal Server Error' });
        return;
      }

      if (result.affectedRows === 0) {
        res.status(404).json({ message: 'Employee not found' });
      } else {
        res.json({ message: 'Employee deleted' });
      }
    });
  });
  

// Example route to test the database connection

app.get('/testdb', (req, res) => {
  db.query('SELECT 1', (err, results) => {
    if (err) {
      console.error('Error testing database connection:', err);
      return res.status(500).send('Error testing database connection');
    }
    res.send('Database connection is working');
  });
});





 
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });























  