package TodoApp.demo.Repository;

import TodoApp.demo.Model.Todos;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface Repository2 extends CrudRepository<Todos,Long> {
    List<Todos> findByemail(String email);


}
