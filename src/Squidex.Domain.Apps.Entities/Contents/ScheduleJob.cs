﻿// ==========================================================================
//  Squidex Headless CMS
// ==========================================================================
//  Copyright (c) Squidex UG (haftungsbeschraenkt)
//  All rights reserved. Licensed under the MIT license.
// ==========================================================================

using System;
using NodaTime;
using Squidex.Domain.Apps.Core.Contents;
using Squidex.Infrastructure;

namespace Squidex.Domain.Apps.Entities.Contents
{
    public sealed class ScheduleJob
    {
        public Guid Id { get; }

        public Instant DueTime { get; }

        public Status Status { get; }

        public string StatusColor { get; set; }

        public RefToken ScheduledBy { get; }

        public ScheduleJob(Guid id, Status status, string statusColor, RefToken scheduledBy, Instant dueTime)
        {
            Id = id;
            ScheduledBy = scheduledBy;
            Status = status;
            StatusColor = statusColor;
            DueTime = dueTime;
        }

        public static ScheduleJob Build(Status status, string statusColor, RefToken scheduledBy, Instant dueTime)
        {
            return new ScheduleJob(Guid.NewGuid(), status, scheduledBy, dueTime);
        }
    }
}
