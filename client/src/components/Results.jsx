import React from 'react';
import styled from 'styled-components';

class Results extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            dates: this.props.results,
            highestAverageWeekday: null,
            highestAverage: null,
            query: this.props.query
        }

        this.findAverages = this.findAverages.bind(this);
    }

    componentWillReceiveProps(newProps) {
        this.setState({
            dates: newProps.results,
            highestAverage: null,
            highestAverageWeekday: null,
            query: newProps.query
        });
    } 

    findAverages() {
        if (this.state.dates.length > 0 && !this.state.highestAverage && !this.state.highestAverageWeekday) {
            const weekdays = [
                'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'
            ];
            var dates = this.state.dates;
            var hashMap = {
                'Sunday': {},
                'Monday': {},
                'Tuesday': {},
                'Wednesday': {},
                'Thursday': {},
                'Friday': {},
                'Saturday': {}
            };
            for (let i = 0; i < dates.length; i++) {
                var day = new Date(dates[i]);
                var weekday = weekdays[day.getDay() + 1];
                dates[i] in hashMap[weekday] ? hashMap[weekday][dates[i]]++ : hashMap[weekday][dates[i]] = 1;
            }
            var averages = {};
            for (let day in hashMap) {
                var commits = hashMap[day];
                var length = Object.keys(commits).length;
                if (length === 0) {
                    continue;
                }
                var totalCommits = 0;
                for (let date in commits) {
                    totalCommits += commits[date];
                }
                var average = totalCommits / length;
                averages[day] = average
            }
            console.log(hashMap);
            console.log(averages);
            var highestAverage = 0;
            var highestAverageWeekday = '';
            for (let day in averages) {
                if (averages[day] > highestAverage) {
                    highestAverage = averages[day];
                    highestAverageWeekday = day;
                }
            }
            if (highestAverage.toString().includes('.')) {
                highestAverage = highestAverage.toFixed(2);
            }
            this.setState({
                highestAverage,
                highestAverageWeekday
            });
        }
    }

    render() {
        if (typeof this.state.dates === 'string') {
            return <div>{this.state.dates}</div>
        }
        this.findAverages();
        if (!this.state.highestAverage && !this.state.highestAverageWeekday) {
            return null;
        } else {
            return (
                <>
                    <h2>github.com/{this.state.query}</h2>
                    <div>In the past year, {this.state.highestAverageWeekday} had the highest number of commits, with an average of {this.state.highestAverage} commits per day.</div>
                </>
            )   
        }
    }
}

export default Results;