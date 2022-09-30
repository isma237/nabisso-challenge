import Category from "../adminComponent/Category";
import { Tabs, TabItem, Heading} from '@aws-amplify/ui-react'
import { useState } from "react";

const Dashboard = (props) => {
  const [index, setIndex] = useState(0);
  return (
    <>
        <Heading level={2}>Espace administrateur</Heading>
        <Tabs currentIndex={index} onChange={(i) => setIndex(i)}>
            <TabItem title="Gestion des catégories">
                <Category />
            </TabItem>
            <TabItem title="Gestion des classes">
                <p>
                The content of the second tab is initially shown because we passed in
                index 1 to defaultIndex (notice that the tabs are zero-indexed).
                </p>
            </TabItem>
        </Tabs>
    </>
  );
};

export default Dashboard;
