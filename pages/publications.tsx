import React from 'react';
import Head from 'next/head';
import { Container, Grid, Link, List, Text, Title } from '@components';

const Publications = (): JSX.Element => (
  <Container marginBottom="5rem">
    <Head>
      <title>Publications</title>
    </Head>
    <Container alignItems="center" mb="3rem">
      <Title fontSize="40px" as="h2">
        Publications
      </Title>
    </Container>
    <Grid
      alignItems="flex-start"
      gridTemplateColumns={['1fr', '1fr 1fr']} // 2 columns, one for the image, one for content
      gridGap={['1rem', '2rem']}
    >
      {/* First column: Image */}
      <Container>
        <img
          src="/img/cav2240-fig-0003-m.webp" // Replace with your actual image path
          alt="Publication Image"
          style={{ width: '100%', height: 'auto', borderRadius: '8px' }}
        />
      </Container>

      {/* Second column: Content (Title, Authors, Description, Links) */}
      <Container>
        {/* Title */}
        <Container mb="1rem">
          <Title fontSize="2rem" as="h3">
            De-NeRF: Ultra-high-definition NeRF with deformable net alignment
          </Title>
        </Container>

        {/* Authors */}
        <Container mb="1rem">
          <Text fontSize="1.2rem" fontWeight="bold">
            Authors:
          </Text>
          <Text>
            Jianing Hou, Runjie Zhang, Zhongqi Wu, Weiliang Meng, Xiaopeng
            Zhang, Jianwei Guo*
          </Text>
        </Container>

        {/* Description */}
        <Container mb="1rem">
          <Text fontSize="1rem" lineHeight="1.6" letterSpacing="0.02rem">
            Neural Radiance Field (NeRF) can render complex 3D scenes with
            viewpoint-dependent effects. However, less work has been devoted to
            exploring its limitations in high-resolution environments,
            especially when upscaled to ultra-high resolution (e.g., 4k).
            Specifically, existing NeRF-based methods face severe limitations in
            reconstructing high-resolution real scenes, for example, a large
            number of parameters, misalignment of the input data, and
            over-smoothing of details. In this paper, we present a novel and
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

        {/* Links */}
        <Container>
          <Text fontSize="1.2rem" fontWeight="bold">
            Links:
          </Text>
          <List>
            <Link
              href="https://onlinelibrary.wiley.com/doi/10.1002/cav.2240"
              target="_blank"
            >
              Wiley
            </Link>
          </List>
        </Container>
      </Container>
    </Grid>
  </Container>
);

export default Publications;
