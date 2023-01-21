/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { customTableHead } from '../Styles';

export const DownloadsPage = () => {
  return (
    <>
      <center>
        <h2>This is the Downloads Page</h2>
        <table
          css={css`
            border: 1px solid black;
            margin: auto;
            width: calc(100% - 40px);
            border-radius: 10px;
            overflow-x: scroll;
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
              <td>Download it here</td>
            </tr>
            <tr>
              <td>Duos Life Planning</td>
              <td>
                Here you can plan your life AND the life of your significant
                other -- planning for couples
              </td>
              <td>
                <a href="https://docs.google.com/spreadsheets/d/1yUfZxdT6yceSbMRi4AsBJF5rPiaSHDRBizxzb6xQCEs/copy?usp=sharing">
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
