import React, { useState, useEffect } from "react";
import styles from "./Regestration3.module.css";

export default function Regestration2({data, onChange}) {
    const departments = [
        { id: "dept-1", name: "IT" },
        { id: "dept-2", name: "Relex" },
        { id: "dept-3", name: "Design" },
        { id: "dept-4", name: "HR" },
        { id: "dept-5", name: "Event" },
        { id: "dept-6", name: "Marketing" },
    ];

    const ranks = [
        { id: "rank-1", label: "1" },
        { id: "rank-2", label: "2" },
        { id: "rank-3", label: "3" },
        { id: "rank-4", label: "4" },
        { id: "rank-5", label: "5" },
        { id: "rank-6", label: "6" },
    ];

    // Initialize from localStorage
    const [selections, setSelections] = useState(() => {
        const saved = localStorage.getItem('departmentRanking');
        return saved ? JSON.parse(saved) : {};
    });

    function handleSelect(deptId, rankId) {
        setSelections((prev) => {
            const copy = { ...prev };
            // Remove any other department that had this rank
            for (const dId in copy) {
                if (copy[dId] === rankId && dId !== deptId) {
                    delete copy[dId];
                    break;
                }
            }
            copy[deptId] = rankId;
            return copy;
        });
    }

    // Save to localStorage whenever selections change
    useEffect(() => {
        localStorage.setItem('departmentRanking', JSON.stringify(selections));
    }, [selections]);

    // Update data.RankingDep with formatted ranking
    useEffect(() => {
        if (data && Object.keys(selections).length > 0) {
            // Convert selections to an array sorted by rank
            const ranking = [];
            
            // Create a mapping from rankId to department name
            for (const deptId in selections) {
                const dept = departments.find(d => d.id === deptId);
                const rank = ranks.find(r => r.id === selections[deptId]);
                
                if (dept && rank) {
                    ranking.push({
                        rank: parseInt(rank.label),
                        department: dept.name
                    });
                }
            }
            
            // Sort by rank
            ranking.sort((a, b) => a.rank - b.rank);
            
            // Store as array of department names in order
            data.DepartmentRanking = ranking.map(item => item.department);
        }
    }, [selections, data]);

    return (
        <div className={styles.main}>
        <p className="self-start text-xl">Department ranking</p><br />
        <p className="labelText">Please rank the departments below according to your preferences. (1 = most preferred,  6 = least preferred) </p>
        <br />
        <table className={styles.table}>
            <thead>
            <tr>
                <th className={styles.ldummy}></th>
                {ranks.map((rank) => (
                <th key={rank.id} className={styles.rankContainer}>
                    #{rank.label}
                </th>
                ))}
                <th className={styles.rdummy}></th>
            </tr>
            </thead>
            <tbody>
            {departments.map((dept) => (
                <tr key={dept.id} className={styles.kk}>
                <td
                    className={`${styles.depContainer} ${styles.depContainerDummy}`}
                >
                    <div>{dept.name}</div>
                </td>
                {ranks.map((rank) => {
                    const isSelectedHere = selections[dept.id] === rank.id;
                    return (
                    <td key={rank.id} className={styles.checkContainer}>
                        <label>
                        <input
                            type="radio"
                            name={`row-${dept.id}`}
                            checked={isSelectedHere}
                            onChange={() => handleSelect(dept.id, rank.id)}
                        />
                        </label>
                    </td>
                    );
                })}
                <td className={styles.rightDummy}></td>
                </tr>
            ))}
            </tbody>
        </table>
        </div>
    );
}