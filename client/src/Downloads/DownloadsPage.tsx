/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

export const DownloadsPage = () => {
  return (
    <>
      <center
        css={css`
          margin-top: 100px;
        `}
      >
        <p>Blah Blah Blah some statement about what we do here</p>
        <table
          css={css`
            border: 1px solid black;
            margin: auto;
            width: calc(100% - 40px);
            border-radius: 10px;
            overflow-x: scroll;
            box-shadow: inset 0 -3em 3em rgba(0, 0, 0, 0.1),
              0 0 0 2px rgb(255, 255, 255), 0.3em 0.3em 1em rgba(0, 0, 0, 0.3);
          `}
        >
          <thead
            css={css`
              border: 1px solid black;
              background-color: gray;
              height: 50px;
            `}
          >
            <tr>
              <th
                css={css`
                  border-radius: 10px 0px 0px 0px;
                `}
              >
                Name
              </th>
              <th>Description</th>
              <th>Video Walk Through</th>
              <th
                css={css`
                  border-radius: 0px 10px 0px 0px;
                `}
              >
                Download
              </th>
            </tr>
          </thead>
          <tbody
            css={css`
              border: 1px solid black;
              height: 100px;
              text-align: center;
              margin-left: 25px;
            `}
          >
            <tr>
              <td>Singles Life Planning</td>
              <td>Here you can plan your life -- planning for single people</td>
              <td>Video Link</td>
              <td>
                <a href="https://docs.google.com/spreadsheets/d/1yUfZxdT6yceSbMRi4AsBJF5rPiaSHDRBizxzb6xQCEs/copy?usp=sharing">
                  Download it Here
                </a>
              </td>
            </tr>
            <tr>
              <td>Duos Life Planning</td>
              <td>
                Here you can plan your life AND the life of your significant
                other -- planning for couples
              </td>
              <td>Video Link</td>
              <td>
                <a href="https://docs.google.com/spreadsheets/d/1zqFX6GdTW7XaBJ3Wf9x2anooxHc7a-s1P8jzpX4I2lI/copy?usp=share_link">
                  Download it Here
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </center>
    </>
  );
};
