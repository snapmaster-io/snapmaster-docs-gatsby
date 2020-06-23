import React from 'react';
import PropTypes from 'prop-types';
import { MdEdit } from 'react-icons/md';

export default function EditGithub({ githubEditUrl }) {
  if (githubEditUrl) {
    // for some reason, githubEditUrl comes back as relative to deployed site
    // this hack makes sure the url is to https://github.com/...
    const indexOfGitHub = githubEditUrl.indexOf('github.com');
    const url = `https://${githubEditUrl.substring(indexOfGitHub)}`;
    
    return (
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display: 'flex',
          alignItems: 'center',
          textDecoration: 'none',
          marginTop: '48px',
          color: '#78757a',
          opacity: '0.8',
          fontSize: '14px',
          fontWeight: 'normal',
        }}
      >
        <MdEdit style={{ marginRight: '5px' }} />
        Edit this page on GitHub
      </a>
    );
  }
  return null;
}

EditGithub.propTypes = {
  githubEditUrl: PropTypes.string,
};

EditGithub.defaultProps = {
  githubEditUrl: null,
};
