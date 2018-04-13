import React from 'react';
import styled from 'styled-components';

const PageContainer = styled.div`
  height: 300px;
  width: 1000px;
  margin: auto;
  margin-top: 130px;
`

const PageItem = styled.div`
  height: 600px;
  margin-bottom: 40px;
  position: relative;
  background-image: url('${({background}) => background}');
  &:nth-child(even){
  }
  overflow: hidden;
`

const BlogMetaContainer = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  min-height: 150px;
  background: rgba(255,255,255,0.8);
`

const BlogMeta = ({title, date, blurb}) => (
    <BlogMetaContainer/>
)

const BlogThumb = ({title, date, blurb, img}) => (
        <PageItem background={img}>
          <BlogMeta />
        </PageItem>
)

export default () => (
        <PageContainer>
        <BlogThumb img='https://www.cuckooland.com/dnc/cuckooland/artwork/product_images/Wood-Fired-Homemade-Pizza.jpg?quality=95&scale=canvas&width=1000&height=1000' />
        <BlogThumb img='https://techbeacon.com/sites/default/files/styles/social/public/scrumban-kanban-vs-scrum-how-compare-pros-cons-agile-methodologies-teams.jpg?itok=Rfr1Hwa-'/>
        </PageContainer>
)
