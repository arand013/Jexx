import { Card, Timeline, Typography } from "antd";
import React, { useMemo } from "react";
import { useMoralis } from "react-moralis";

const { Text } = Typography;

const styles = {
  title: {
    fontSize: "20px",
    fontWeight: "700",
    color:"#dfdadafa"
  },
  text: {
    fontSize: "16px",
    color:"#dfdadafa"
  },
  card: {
    boxShadow: "0 0.5rem 1.2rem rgb(189 197 209 / 20%)",
    border: "1px solid #078a00",
    background: "#35363ffa",
    borderRadius: "0.5rem",
  },
  timeline: {
    marginBottom: "-45px",
  },
};

export default function QuickStart({ isServerInfo }) {
  const { Moralis } = useMoralis();

  const isInchDex = useMemo(() => (Moralis.Plugins?.oneInch ? true : false), [Moralis.Plugins?.oneInch]);

  return (
    <div style={{ display: "flex", gap: "10px" }}>
      <Card
        style={styles.card}
        title={
          <>
            📝 <Text strong>To-Do List</Text>
          </>
        }
      >
        <Timeline mode="left" style={styles.timeline}>
          <Timeline.Item dot="📄">
            <Text delete style={styles.text}>
              Clone or fork{" "}
              <a
                href="https://github.com/ethereum-boilerplate/ethereum-boilerplate#-quick-start"
                target="_blank"
                rel="noopener noreferrer"
              >
                ethereum-boilerplate
              </a>{" "}
            </Text>
          </Timeline.Item>

          <Timeline.Item dot="💿">
            <Text delete={isInchDex} style={styles.text}>
              Install{" "}
              <a
                href="https://moralis.io/plugins/1inch/?utm_source=boilerplatehosted&utm_medium=todo&utm_campaign=ethereum-boilerplate"
                target="_blank"
                rel="noopener noreferrer"
              >
                1inch Moralis Plugin
              </a>{" "}
              needed for the<Text code>{"<InchDex />"}</Text> component (optional)
            </Text>
          </Timeline.Item>

        </Timeline>
      </Card>
      <div>
        <Card
          style={styles.card}
          title={
            <>
              💣 <Text strong>Starting Local Chain (optional)</Text>
            </>
          }
        >
          <Timeline mode="left" style={styles.timeline}>
            <Timeline.Item dot="💿">
              <Text style={styles.text}>
                Install{" "}
                <a target="_blank" rel="noopener noreferrer" href="https://www.npmjs.com/package/truffle">
                  Truffle
                </a>{" "}
                and{" "}
                <a target="_blank" rel="noopener noreferrer" href="https://www.npmjs.com/package/ganache-cli">
                  ganache-cli
                </a>{" "}
                <Text code>npm install -g ganache-cli truffle</Text>
              </Text>
            </Timeline.Item>
            <Timeline.Item dot="⚙️">
              <Text style={styles.text}>
                Start you local devchain: <Text code>npm run devchain</Text> on a new terminal
              </Text>
            </Timeline.Item>
            <Timeline.Item dot="📡">
              <Text style={styles.text}>
                Deploy test contract: <Text code>npm run deploy</Text> on a new terminal
              </Text>
            </Timeline.Item>
            <Timeline.Item dot="✅" style={styles.text}>
              <Text>
                Open the 📄<Text strong> Contract</Text> tab
              </Text>
            </Timeline.Item>
            

            <Timeline.Item dot="📄">
            <Text style={styles.text}>
              Step 1: Build a running server with {" "}
              <a
                href="https://github.com/ethereum-boilerplate/ethereum-boilerplate#-quick-start"
                target="_blank"
                rel="noopener noreferrer"
              >
                ethereum-boilerplate
              </a>{" "}
            </Text>
          </Timeline.Item>

          <Timeline.Item dot="🚀">
            <Text style={styles.text}>Step 2: Create idea to Build using plugins</Text>
          </Timeline.Item>

          <Timeline.Item dot="🚀">
            <Text style={styles.text}>Step 3: Solidfy your idea and start page by page</Text>
          </Timeline.Item>

          <Timeline.Item dot="🚀">
            <Text style={styles.text}>Step 4: BUIDL!!!</Text>
          </Timeline.Item>
          


          </Timeline>
        </Card>


      </div>
    </div>
  );
}
