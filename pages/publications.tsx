import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import styled from 'styled-components';
import { Container, Grid, Link, Text, Title } from '@components';

// Styled components for enhanced image presentation
const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 800px;
  aspect-ratio: 16/9;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  margin: 2rem auto 3rem;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 12px 40px rgba(0, 0, 0, 0.15);
  }
`;

const PublicationCard = styled(Container)`
  background: white;
  border-radius: 16px;
  padding: 2.5rem;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.06);
  
  @media (max-width: 768px) {
    padding: 1.5rem;
  }
`;

const PublicationTitle = styled.h2`
  font-size: 2.5rem;
  line-height: 1.3;
  margin-bottom: 1rem;
  text-align: center;
  
  @media (max-width: 768px) {
    font-size: 1.8rem;
  }
`;

const SectionTitle = styled.h3`
  font-size: 1.3rem;
  font-weight: bold;
  margin-bottom: 1rem;
  color: rgba(0, 0, 0, 0.8);
`;

const ContentSection = styled(Container)`
  max-width: 900px;
  margin: 0 auto;
`;

const Publications = (): JSX.Element => (
  <Container marginBottom="5rem">
    <Head>
      <title>Publications</title>
    </Head>
    <Container alignItems="center" mb="4rem">
      <Title fontSize={['32px', '40px']} as="h1" mb="1rem">
        Publications
      </Title>
      <Text textAlign="center" maxWidth="700px" color="rgba(0, 0, 0, 0.7)">
        Research work and academic contributions in the field of computer graphics and neural rendering.
      </Text>
    </Container>
    
    <PublicationCard>
      {/* Title at the top */}
      <Container mb="2rem">
        <PublicationTitle>
          De-NeRF: Ultra-high-definition NeRF with deformable net alignment
        </PublicationTitle>
        
        {/* Authors right below the title */}
        <Text textAlign="center" fontSize="1.1rem" color="rgba(0, 0, 0, 0.7)" mb="1rem">
          <strong>Jianing Hou</strong>, <strong>Runjie Zhang</strong>, Zhongqi Wu, Weiliang Meng, Xiaopeng Zhang, Jianwei Guo*
        </Text>
      </Container>
      
      {/* Image in the middle, centered */}
      <ImageContainer>
        <Image
          src="/img/cav2240-fig-0002-m-2.webp"
          alt="De-NeRF: Ultra-high-definition NeRF with deformable net alignment"
          fill
          style={{ objectFit: 'cover' }}
          sizes="(max-width: 768px) 100vw, 800px"
          priority
        />
      </ImageContainer>
      
      {/* Content taking full width */}
      <ContentSection>
        {/* Abstract section */}
        <Container mb="2rem">
          <SectionTitle>Abstract</SectionTitle>
          <Text fontSize="1rem" lineHeight="1.8" letterSpacing="0.01rem" color="rgba(0, 0, 0, 0.7)">
            Neural Radiance Field (NeRF) can render complex 3D scenes with
            viewpoint-dependent effects. However, less work has been devoted to
            exploring its limitations in high-resolution environments,
            especially when upscaled to ultra-high resolution (e.g., 4k).
            Specifically, existing NeRF-based methods face severe limitations in
            reconstructing high-resolution real scenes, for example, a large
            number of parameters, misalignment of the input data, and
            over-smoothing of details. 
            <br /><br />
            In this paper, we present a novel and
            effective framework, called De-NeRF, based on NeRF and deformable
            convolutional network, to achieve high-fidelity view synthesis in
            ultra-high resolution scenes: (1) marrying the deformable
            convolution unit which can solve the problem of misaligned input of
            the high-resolution data. (2) Presenting a density sparse
            voxel-based approach which can greatly reduce the training time
            while rendering results with higher accuracy. Compared to existing
            high-resolution NeRF methods, our approach improves the rendering
            quality of high-frequency details and achieves better visual effects
            in 4K high-resolution scenes.
          </Text>
        </Container>

        {/* Links section */}
        <Container mb="1rem">
          <SectionTitle>Links</SectionTitle>
          <Grid gridTemplateColumns="repeat(auto-fit, minmax(150px, auto))" gap="1rem">
            <Link
              href="https://onlinelibrary.wiley.com/doi/10.1002/cav.2240"
              target="_blank"
              style={{
                display: 'inline-block',
                padding: '0.7rem 1.2rem',
                background: 'rgba(0, 0, 0, 0.05)',
                borderRadius: '8px',
                fontWeight: '500',
                transition: 'all 0.2s ease'
              }}
            >
              View on Wiley
            </Link>
          </Grid>
        </Container>
      </ContentSection>
    </PublicationCard>
    
    {/* You can add more publications here with the same structure */}
  </Container>
);

export default Publications;
