'use client';

import React from 'react';
import {
  FaShoppingCart,
  FaIndustry,
  FaHospital,
  FaUtensils,
  FaGraduationCap,
  FaBriefcase,
  FaBoxOpen,
  FaMapMarkedAlt,
  FaArrowRight,
} from 'react-icons/fa';
import styles from './IndustriesSection.module.css';

const industries = [
  { name: 'E-Commerce Brands',           icon: <FaShoppingCart /> },
  { name: 'Manufacturing & Enterprises', icon: <FaIndustry /> },
  { name: 'Healthcare & Hospitals',      icon: <FaHospital /> },
  { name: 'Retail, Cafés & Restaurants', icon: <FaUtensils /> },
  { name: 'Educational Institutions',    icon: <FaGraduationCap /> },
  { name: 'Service-Based Businesses',    icon: <FaBriefcase /> },
  { name: 'FMCG Brands',                icon: <FaBoxOpen /> },
  { name: 'Multi-Location Businesses',   icon: <FaMapMarkedAlt /> },
];

const IndustriesSection = () => {
  return (
    <section className={styles.section}>
      {/* Extra ambient orbs */}
      <div className={styles.bgStack}>
        <div className={styles.bgColorOverlay}></div>
        <div className={styles.bgGrid}></div>
        <div className={styles.glowBlobA}></div>
        <div className={styles.glowBlobB}></div>
      </div>

      <div className={styles.container}>

        {/* Header */}
        <div className={styles.header}>
          <div className={styles.headerLeft}>
            <span className={styles.eyebrow}>Industries We Serve</span>
            <h2 className={styles.title}>Industries We Help Scale</h2>
            <p className={styles.subtitle}>
              From startups to enterprises, we deliver tailored strategies that
              drive measurable growth across every industry vertical.
            </p>
          </div>
          <div className={styles.headerRight}>
            <a href="/contact" className={styles.uniqueBtn}>
              <span>Talk to an Expert</span>
              <FaArrowRight className={styles.btnArrow} />
            </a>
          </div>
        </div>

        {/* Pills */}
        <div className={styles.pillsWrap}>
          {industries.map((item, index) => (
            <div key={index} className={styles.pill}>
              <span className={styles.icon}>{item.icon}</span>
              <span className={styles.name}>{item.name}</span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default IndustriesSection;