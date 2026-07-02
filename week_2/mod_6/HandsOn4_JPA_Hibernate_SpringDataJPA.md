# Hands-on 4 - Difference between JPA, Hibernate and Spring Data JPA

## Objective
Understand the difference between JPA, Hibernate and Spring Data JPA.

---

## Java Persistence API (JPA)

- JPA stands for Java Persistence API.
- It is a specification (JSR 338).
- It defines standards for mapping Java objects to database tables.
- It does not provide an implementation.
- Common annotations:
    - @Entity
    - @Table
    - @Id
    - @Column

Example from this project:

```java
@Entity
@Table(name="country")
public class Country {
    @Id
    private String code;
}
```

---

## Hibernate

- Hibernate is an ORM framework.
- Hibernate implements the JPA specification.
- Hibernate generates SQL queries automatically.
- Hibernate manages object-relational mapping.

Example SQL generated:

```sql
select c1_0.code,c1_0.name
from country c1_0;
```

---

## Spring Data JPA

Spring Data JPA is built on top of JPA and Hibernate.

Advantages:

- Less boilerplate code
- Automatic CRUD methods
- Repository support
- Transaction management
- Pagination
- Sorting

Example:

```java
@Repository
public interface CountryRepository extends JpaRepository<Country,String>{

}
```

No implementation is required.

---

## Hibernate vs Spring Data JPA

### Hibernate

```java
Session session = factory.openSession();
Transaction tx = session.beginTransaction();

session.save(employee);

tx.commit();

session.close();
```

Needs manual transaction handling.

---

### Spring Data JPA

```java
@Autowired
private EmployeeRepository repository;

@Transactional
public void addEmployee(Employee employee){

    repository.save(employee);

}
```

Transaction is handled automatically.

---

## Comparison Table

| Feature | JPA | Hibernate | Spring Data JPA |
|----------|-----|-----------|-----------------|
| Type | Specification | ORM Framework | Abstraction Layer |
| Implementation | No | Yes | Uses Hibernate |
| CRUD | No | Yes | Yes |
| Transaction Management | No | Manual | Automatic |
| Boilerplate Code | High | Medium | Very Low |

---

## Conclusion

- JPA defines standards.
- Hibernate implements JPA.
- Spring Data JPA simplifies Hibernate by reducing boilerplate code and managing transactions automatically.
