package TodoApp.demo.Repository;

import TodoApp.demo.Model.Login;
import org.springframework.data.repository.CrudRepository;

public interface Repository extends CrudRepository<Login,String>
{
    Boolean findByemail(String email);
    Login findBypassword(String password);
}
