import React, { FC, useState, ChangeEvent } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faCoffee,
	faClock,
	faLongArrowAltRight,
	faExclamationTriangle,
	faTimes,
	faCheckCircle,
} from '@fortawesome/free-solid-svg-icons';
export const IconCoffe = () => <FontAwesomeIcon icon={faCoffee} />;
export const IconClock = () => <FontAwesomeIcon icon={faClock} />;
export const ArrowRight = () => <FontAwesomeIcon icon={faLongArrowAltRight} />;
export const Warning = () => <FontAwesomeIcon icon={faExclamationTriangle} />;
export const Error = () => <FontAwesomeIcon icon={faTimes} />;
export const Success = () => <FontAwesomeIcon icon={faCheckCircle} />;
