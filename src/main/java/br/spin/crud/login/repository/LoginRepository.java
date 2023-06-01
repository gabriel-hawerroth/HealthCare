package br.spin.crud.login.repository;

import br.spin.crud.login.models.Login;
import org.springframework.data.jpa.repository.JpaRepository;

public interface LoginRepository extends JpaRepository<Login, Integer> {

    public Login findByUsuario(String usuario);

}
