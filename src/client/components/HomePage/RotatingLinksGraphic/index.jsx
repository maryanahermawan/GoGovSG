import React from 'react'
import { connect } from 'react-redux'
import { createStyles, makeStyles } from '@material-ui/core'
import i18next from 'i18next'
import mainImage from '~/assets/landing-page-graphics/landing-main.svg'
import RotatingLinks from './RotatingLinks'

const mapStateToProps = (state) => ({
  linksToRotate: state.home.linksToRotate,
})

const useStyles = makeStyles((theme) =>
  createStyles({
    heroContainer: {
      position: 'relative',
      width: '100vw',
      maxWidth: (props) => `${props.targetImageWidthPx}px`,
      height: (props) => `${props.heightToWidthRatio * 100}vw`,
      maxHeight: (props) =>
        `${props.targetImageWidthPx * props.heightToWidthRatio}px`,
      marginLeft: 'auto',
      marginBottom: (props) =>
        `max(${props.linkBoxHeightToImageWidth * -50}vw, calc((${
          -1 * props.linkBoxHeightToImageWidth * props.targetImageWidthPx
        }px / 2)))`,
      '@media screen\\0': {
        marginBottom: (props) =>
          `calc((${
            -1 * props.linkBoxHeightToImageWidth * props.targetImageWidthPx
          }px / 2))`,
      },
    },
    heroImage: {
      position: 'absolute',
      width: '100vw',
      maxWidth: (props) => `${props.targetImageWidthPx}px`,
      height: (props) => `${props.heightToWidthRatio * 100}vw`,
      maxHeight: (props) =>
        `${props.targetImageWidthPx * props.heightToWidthRatio}px`,
      verticalAlign: 'top',
      left: 0,
      bottom: 0,
    },
    rotatingLinks: {
      position: 'absolute',
      width: (props) => `${props.linkBoxWidthToImageWidth * 100}vw`,
      maxWidth: (props) =>
        `${props.linkBoxWidthToImageWidth * props.targetImageWidthPx}px`,
      height: (props) => `${props.linkBoxHeightToImageWidth * 100}vw`,
      maxHeight: (props) =>
        `${props.linkBoxHeightToImageWidth * props.targetImageWidthPx}px`,
      fontSize: 'min(3.25vw, 26px)',
      fontWeight: 400,
      color: theme.palette.secondary.contrastText,
      opacity: 0.7,
      right: 0,
      bottom: 0,
      display: 'flex',
      alignItems: 'center',
      paddingLeft: (props) =>
        `${
          props.linkBoxWidthToImageWidth *
          props.rotatingLinkLeftMarginToLinkBox *
          100
        }vw`,
      '@media screen\\0': {
        fontSize: '26px',
      },
    },
  }),
)

const RotatingLinksGraphic = ({ linksToRotate }) => {
  const targetImageWidthPx = 765
  const classes = useStyles({
    heightToWidthRatio: 419 / 765,
    linkBoxWidthToImageWidth: 662.01 / 765,
    linkBoxHeightToImageWidth: 98.0139235 / 765,
    rotatingLinkLeftMarginToLinkBox: 3.5 / 100,
    // Specifies max width of the graphic in px.
    targetImageWidthPx,
  })
  return (
    <div className={classes.heroContainer}>
      <img
        className={classes.heroImage}
        src={mainImage}
        alt={i18next.t('general.appTitle')}
      />
      <div className={classes.rotatingLinks}>
        <RotatingLinks
          prefix={i18next.t('general.shortUrlPrefix')}
          strings={linksToRotate || ['whatsapp']}
        />
      </div>
    </div>
  )
}

export default connect(mapStateToProps, null)(RotatingLinksGraphic)
