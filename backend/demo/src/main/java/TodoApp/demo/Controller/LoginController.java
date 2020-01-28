package TodoApp.demo.Controller;

import TodoApp.demo.Model.Login;
import TodoApp.demo.Model.Todos;
import TodoApp.demo.Repository.Repository;
import TodoApp.demo.Repository.Repository2;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.jdbc.metadata.TomcatDataSourcePoolMetadata;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
public class LoginController {

    @Autowired
    private Repository repository;

    @Autowired
    private Repository2 repository2;



    @PostMapping("/signup")
    public Boolean createUser(@RequestBody Login userData){

        if (!repository.existsById(userData.getEmail())) {
//            repository.save(userData);
            return true;


        }
        else
            return false;
    }

    @PostMapping("/makeaccount")
    public Boolean createsUser(@RequestBody Login userData){


            repository.save(userData);
            return true;



    }
    @PostMapping("/login")
    public Boolean authenticate(@RequestBody Login login){

//        return repository.findBypassword(login.getPassword());

        if (repository.existsById(login.getEmail()))
        {

           Optional<Login> user= repository.findById(login.getEmail());
           if (user.isPresent())
           {
               Login user1=user.get();
               if (user1.getPassword().equals(login.getPassword()))
                   return true;
           }

        }

        return false;
        }

        @PostMapping("/taskSave")
    public Todos saveTask(@RequestBody Todos todos){
        repository2.save(todos);
        return todos;
        }

        @PostMapping("/taskGet")

    public Object getAll(@RequestBody Todos email){
////        > result=repository2.findByemail(email.getEmail());
//            List<Todos> result=repository2.findAll(email.getEmail());
//            System.out.println(result);


            List<Todos> final1=new ArrayList<>();


           Iterable<Todos> result= repository2.findAll();
            for (Todos var: result) {
                System.out.println("result is "+var.getEmail()+"   "+email.getEmail());
                if(var.getEmail().equals(email.getEmail()))
                {

                    final1.add(var);
                }
            }
            return final1;
//        return result;
        }


        @PostMapping("/delete")
    public Boolean deleteTodo(@RequestBody Todos todo){

        if (repository2.existsById(todo.getId()))
        {
        repository2.deleteById(todo.getId());
        return true;
        }

        return false;
    }








}


