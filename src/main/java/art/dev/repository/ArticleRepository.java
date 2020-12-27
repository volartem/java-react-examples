package art.dev.repository;

import art.dev.domain.Article;

import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * Spring Data  repository for the Article entity.
 */
@SuppressWarnings("unused")
@Repository
public interface ArticleRepository extends JpaRepository<Article, Long>, JpaSpecificationExecutor<Article> {

    @Query("select article from Article article where article.author.login = ?#{principal.username}")
    List<Article> findByAuthorIsCurrentUser();
}
