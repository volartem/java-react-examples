import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import { Translate, ICrudGetAction, TextFormat } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { IRootState } from 'app/shared/reducers';
import { getEntity } from './article.reducer';
import { IArticle } from 'app/shared/model/article.model';
import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';

export interface IArticleDetailProps extends StateProps, DispatchProps, RouteComponentProps<{ id: string }> {}

export const ArticleDetail = (props: IArticleDetailProps) => {
  useEffect(() => {
    props.getEntity(props.match.params.id);
  }, []);

  const { articleEntity } = props;
  return (
    <Row>
      <Col md="8">
        <h2>
          <Translate contentKey="examplesApp.article.detail.title">Article</Translate> [<b>{articleEntity.id}</b>]
        </h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="createdDate">
              <Translate contentKey="examplesApp.article.createdDate">Created Date</Translate>
            </span>
          </dt>
          <dd>
            {articleEntity.createdDate ? <TextFormat value={articleEntity.createdDate} type="date" format={APP_DATE_FORMAT} /> : null}
          </dd>
          <dt>
            <span id="lastModifiedDate">
              <Translate contentKey="examplesApp.article.lastModifiedDate">Last Modified Date</Translate>
            </span>
          </dt>
          <dd>
            {articleEntity.lastModifiedDate ? (
              <TextFormat value={articleEntity.lastModifiedDate} type="date" format={APP_DATE_FORMAT} />
            ) : null}
          </dd>
          <dt>
            <span id="createdBy">
              <Translate contentKey="examplesApp.article.createdBy">Created By</Translate>
            </span>
          </dt>
          <dd>{articleEntity.createdBy}</dd>
          <dt>
            <span id="lastModifiedBy">
              <Translate contentKey="examplesApp.article.lastModifiedBy">Last Modified By</Translate>
            </span>
          </dt>
          <dd>{articleEntity.lastModifiedBy}</dd>
          <dt>
            <span id="text">
              <Translate contentKey="examplesApp.article.text">Text</Translate>
            </span>
          </dt>
          <dd>{articleEntity.text}</dd>
          <dt>
            <span id="published">
              <Translate contentKey="examplesApp.article.published">Published</Translate>
            </span>
          </dt>
          <dd>{articleEntity.published ? 'true' : 'false'}</dd>
          <dt>
            <Translate contentKey="examplesApp.article.author">Author</Translate>
          </dt>
          <dd>{articleEntity.authorLogin ? articleEntity.authorLogin : ''}</dd>
        </dl>
        <Button tag={Link} to="/article" replace color="info">
          <FontAwesomeIcon icon="arrow-left" />{' '}
          <span className="d-none d-md-inline">
            <Translate contentKey="entity.action.back">Back</Translate>
          </span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/article/${articleEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" />{' '}
          <span className="d-none d-md-inline">
            <Translate contentKey="entity.action.edit">Edit</Translate>
          </span>
        </Button>
      </Col>
    </Row>
  );
};

const mapStateToProps = ({ article }: IRootState) => ({
  articleEntity: article.entity,
});

const mapDispatchToProps = { getEntity };

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(ArticleDetail);
