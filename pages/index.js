import Head from 'next/head'
import { Box, Flex, Text, Spacer } from "@chakra-ui/react";


import styles from '../styles/Home.module.css'

import SliderGallery from "../src/components/SliderGallery";
import LatestSocialUpdates from "../src/components/LatestSocialUpdates";
import mock_img_list from "../src/test/mockData";

export default function Home() {

  {/* TODO(mark): populate with actual images */}
  // populate images used in image carousels
  const upperFoodImages = mock_img_list;
  const lowerFoodImages = mock_img_list;

  return (
    <div className={styles.container}>
      {/* TODO(mark): update website header when more info is available */}
      <Head>
        <title>Restaurant Website</title>
        <meta name="description" content="Restaurant Website Template" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>

        <Box textAlign="center">
          <Spacer height="180px"/>
          <Text>TODO: Put title + restaurant logo HERE </Text>
          <SliderGallery imgs_list={upperFoodImages}/>
          <Text>Put text here</Text>
          <SliderGallery imgs_list={lowerFoodImages}/>
          <Text>Read what our customers have to say! </Text>
          {/* TODO(mark): show reviews. 
            Use a carousel for the posts?
            Or have them fade in like a wordcloud?
          */}
          <LatestSocialUpdates/>
        </Box>
      </main>
    </div>
  )
}
